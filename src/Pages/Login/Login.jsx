import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContexts';

const Login = () => {
    const {LogInUser}=useContext(AuthContext)
    const navigate=useNavigate()
    
    const handleSubmit =event=>{
        event.preventDefault();
        const form =event.target
        const email =form.email.value
        const password =form.password.value
        console.log(email,password);
        LogInUser(email,password)
        .then(result =>{
            const user =result.user
            console.log(user);
            form.reset();
            navigate('/')
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='border py-5  rounded '>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  name="email" placeholder="Enter email" required/>
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  name="password" placeholder="Password" required/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                <br />
                <Form.Text className="text-danger">
                       {}
               </Form.Text>
            </Form>
        </div>
    );
};

export default Login;