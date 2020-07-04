import React from 'react';
import './sign-in-sign-out.style.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignOut = () => (
    <div className='sign-in-sign-up'>
    <SignIn />
    <SignUp />
    </div>
);

export default SignInSignOut;