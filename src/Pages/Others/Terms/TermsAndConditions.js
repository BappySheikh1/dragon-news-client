import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Hero is our Terms and conditions</h3>
            <p>Go back to : <Link to='/register'>Registion</Link></p>
        </div>
    );
};

export default TermsAndConditions;