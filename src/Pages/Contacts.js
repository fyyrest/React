import React, { useState , useEffect} from "react";
import{
    Form,
    Button
} from "react-bootstrap";

function Contacts(){
    const [x, setX] = useState(false);

    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [emailDirty, setEmailDirty] = useState( false);
    const [textDirty, setTextDirty] = useState( false);
    const [checksub, checksubmit] = useState( false);
    const [emailError, setEmailError] = useState( 'Введіть E-mail');
    const [textError, setTextError] = useState( 'Введіть повідомлення');
    const [formValid, setFormValid] = useState(false);

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!re.test(String(e.target.value.toLowerCase()))) {
            setEmailError('Некоректний E-mail')

        } else {

            setEmailError('')
        }
    }

    const textHandler = (e) => {
        setText(e.target.value)
        if (e.target.value.length < 6) {
            setTextError('Повідомлення дуже закоротке')
            if (!e.target.value) {
                setTextError('Поле не може бути пустим')
            }
        } else {
            setTextError('')
        }
    }

    const clickHandler = (y) => {
        if(y.target.name === "check"){
            setEmailDirty(true)
            setTextDirty(true)
            if(emailError.length < 2){
                checksubmit(false)
            }
            else{
                checksubmit(true)
            }

        }
    }

    const onclickHandler = (y) => {
        if(y.target.name === "email"){
            setEmailDirty(false)
        }
        if(y.target.name === "text"){
            setTextDirty(false)
        }
    }

    useEffect ( () => {
        if(checksub === true){
            if (emailError || textError) {
                setFormValid(false)
            } else {
                setFormValid(true)
            }
        }
    },[emailError, textError])

    return(
        <div class="Contact" style={{marginLeft: "10%", marginRight: "10%", marginTop: "5%"}}>
            <h2>Contacts us</h2>
            <Form>
                <Form.Group controlId="fromBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>}
                    <Form.Control onChange={e => emailHandler(e)} name="email" value={email} onClick={y => onclickHandler(y)}  type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        We'll never share yout email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="fromBasicEmail">
                    <Form.Label>Example textarea</Form.Label>
                    {(textError && textDirty) && <div style={{color:"red"}}>{textError}</div>}
                    <textarea onChange={e => textHandler(e)} name="text" value={text}  onClick={y => onclickHandler(y)}  class="form-control" rows="3"/>
                </Form.Group>

                <Form.Group controlId="fromBasicEmail">
                    <Form.Check onClick={y => clickHandler(y)} checked={x} onChange={() => setX(!x)} name="check" type="checkbox" label="Check me out"/>
                </Form.Group>

                <Button disabled={!formValid}  variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Contacts;