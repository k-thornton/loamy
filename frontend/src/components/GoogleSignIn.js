import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { authService } from '../services/AuthService';

const GoogleSignIn = () => {
    return (
        <GoogleLogin
            onSuccess={authService.handleGoogleLoginSuccess}
            onFailure={authService.handleGoogleLoginFailure}
            // any other props you need, like clientId
        />
    );
};

export default GoogleSignIn;
