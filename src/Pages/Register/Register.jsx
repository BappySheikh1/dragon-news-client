import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContexts';


const Register = () => {
    const [error, setError] = useState('');
    const [accepted,setAccepted]=useState(false)
    const { createUser, userDisplayName,verifyEmail } = useContext(AuthContext)
    // const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset();
                updateUserName(name,photoURL);
                setError('');
                handleEmailveification();
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    // Verification email
    const handleEmailveification =()=>{
        verifyEmail()
        .then(()=>{
         toast.success('Please verify your email address ')
        })
        .catch(error=>{
            console.log(error);
        }) 
    }

    // userProfileUpdate
    const updateUserName = (name,photoURL) => {
        const profile={
            displayName:name,
            photoURL: photoURL
        }
        userDisplayName(profile)
            .then(() => {

            })
            .catch((error) => {
                console.log(error)
                setError(error.message)
            })
    }

    const handleAccepted=(event)=>{
        setAccepted(event.target.checked);
    }
    return (
        <div>
            <div className='border py-5  rounded '>
                <Form onSubmit={handleSubmit} className='w-50 mx-auto'>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicphotoURL">
                        <Form.Label>photoURL</Form.Label>
                        <Form.Control type="text" name='photoURL' placeholder="Enter photoURL" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check 
                        onClick={handleAccepted}
                        type="checkbox"
                         label={<>Accept <Link to='/terms'>Terms and conditions</Link></>} />
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={!accepted}>
                        Register
                    </Button>
                    <br />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form>
            </div>
        </div>
    );
};

export default Register;