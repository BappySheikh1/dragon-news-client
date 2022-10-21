import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle,FaFacebook,FaTwitter,FaWhatsapp,FaTwitch } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../Context/UseContexts';



const RigthSideNav = () => {
    const {providerLogin}=useContext(AuthContext)
    
     const handleGoogoleSignIn=()=>{
        providerLogin()
        .then(result=>{
            const user=result.user
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })
     } 

    return (
        <div>
            <ButtonGroup className='w-100' vertical>
                <Button onClick={handleGoogoleSignIn} variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button className='mt-2' variant="outline-dark"><FaGithub /> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5 className='my-2'>Find us on</h5>
                <ListGroup>
                <ListGroup.Item className='mb-2'><FaFacebook /> Facebook </ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaWhatsapp /> Whatsapp </ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitter /> Twitter  </ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitch /> Twitch </ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-4'>
                <BrandCarousel />
            </div>
        </div>
    );
};

export default RigthSideNav;