import React, {useState} from 'react';
import './sign-up.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import {auth, createUserProfileDocument} from '../../firebase/firebase.util.js';
import { connect } from 'react-redux';
import { signUpStart} from '../../redux/user/user.actions';

const SignUp = ({signUpStart}) => {
    // constructor(){
    //     super();
    //     this.state={
    //         displayName: '',
    //         email: '',
    //         password: '',
    //         confirmPassword: ''
    //     }
    // }
    const [userCredentials, setUserCredentials] = useState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

    const {displayName, email, password, confirmPassword} = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        //const {signUpStart} = this.props;
        // const {displayName, email, password, confirmPassword} = this.state;
        
        if(password.toString() !== confirmPassword.toString()){
            alert("password do not match");
            return;
        }
        console.log({displayName, email, password});
        signUpStart({displayName, email, password});
        // try{
        //     const {user} = await auth.createUserWithEmailAndPassword(email.toString(), password.toString());
        //     await createUserProfileDocument(user, {displayName});
        //     this.setState={
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: ''
        //     }

        // }catch(error){
        //     console.log(error);
        //     alert(error.message);
        // }
    };

    const handleChange = event => {
        const {name, value} = event.target;
        //this.setState({[name] : [value]});
        setUserCredentials({...userCredentials, [name] : [value]});
    };

    //render(){

        //const {displayName, email, password, confirmPassword} = this.state;

    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} 
                    label='Display Name' required
                    />
                    <FormInput type='text' name='email' value={email} onChange={handleChange} 
                    label='Email' required
                    />
                    <FormInput type='password' name='password' value={password} onChange={handleChange} 
                    label='Password' required
                    />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} 
                    label='Confirm Password' required
                    />
                    <CustomButton type='Submit'>Sign Up</CustomButton>
                </form>
            </div>
    )
    //}
};

const mapDispatchToProps = dispatch => ({
    signUpStart : (userCredentials) => dispatch(signUpStart(userCredentials))
    
})

export default connect(null, mapDispatchToProps)(SignUp);