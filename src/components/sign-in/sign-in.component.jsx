import React, {useState} from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import {auth, signInWithGoogle} from '../../firebase/firebase.util.js';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';


const SignIn = ({emailSignInStart, googleSignInStart}) => {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         email:'',
    //         password:''
    //     }
    // };
    
    const[userCredentials, setCredentials] = useState({ email : '', password : ''})
    const {email, password} = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        //const {emailSignInStart} = this.props;
        //const {email, password} = this.state;
        
        emailSignInStart(email.toString(), password.toString());
        // try{
        //     await auth.signInWithEmailAndPassword(email.toString(), password.toString());
        //     this.setState({email: '', password: ''})
        // }catch(error){
        //     console.log(error);
        // }

        
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setCredentials({...userCredentials, [name] : [value]});
        // this.setState({[name] : [value]})
    }

    //render(){
        //const {googleSignInStart} = this.props;
    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" value={email} label='Email' 
                handleChange={handleChange} required/>
                
                <FormInput name="password" type="password" value={password} label='Password' 
                handleChange={handleChange} required />
                <div className='button'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} >Sign in with Google</CustomButton>
                </div>
            
            </form>
        </div>
        )
    //}

};

const mapDispatchToProps = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart : (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);