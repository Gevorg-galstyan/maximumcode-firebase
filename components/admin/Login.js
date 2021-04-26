import {useState} from 'react';
import {useRouter} from "next/router";
import {Button, Form} from "react-bootstrap";
import {app} from "../../config/firebase";
import {observer} from "mobx-react-lite";

const Login = observer(() => {
    const router = useRouter();
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        app.auth().signInWithEmailAndPassword(login.email, login.password)
            .then(logUser => {
                logUser.user.uid && router.push('/admin/home')
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name={'email'}
                    onChange={({target}) => setLogin({
                        ...login,
                        [target.name]: target.value
                    })}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name={'password'}
                    onChange={({target}) => setLogin({
                        ...login,
                        [target.name]: target.value
                    })}
                />
            </Form.Group>
            <div className={'text-center'}>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </div>

        </Form>
    );
});

export default Login;
