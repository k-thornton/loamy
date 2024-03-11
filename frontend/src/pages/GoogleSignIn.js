import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { handleGoogleLoginSuccess, handleGoogleLoginFailure } from '../services/AuthService';

const GoogleSignIn = () => {
    return (
        <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
            // any other props you need, like clientId
        />
    );
};

export default GoogleSignIn;
