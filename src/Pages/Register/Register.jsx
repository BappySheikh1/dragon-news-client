import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/UseContexts';


const Register = () => {
    const {createUser,userDisplayName}=useContext(AuthContext)

    const handleSubmit =event=>{
        event.preventDefault();
        const form =event.target
        const name =form.name.value
        const email =form.email.value
        const password =form.password.value
        console.log(name,email,password);
        createUser(email,password)
        .then(result =>{
            const user=result.user
            console.log(user);
            form.reset()
            updateUserName(name)
        }).catch(error => console.log(error))
    }

    // userProfileUpdate
    const updateUserName=(name)=>{
        userDisplayName(name)
        .then(()=>{

        })
        .catch((error)=> console.log(error))
    }
    return (
        <div>
            <div className='border py-5  rounded '>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                   Register
                </Button>
                <br />
                <Form.Text className="text-danger">
                        {}
               </Form.Text>
            </Form>
        </div>
        </div>
    );
};

export default Register;