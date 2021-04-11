import React, {useState} from 'react';
import { Link ,useHistory} from 'react-router-dom';
import { auth } from './firebase';
import "./Login.css";
function Login() {
    const history=useHistory();
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    const signIn= e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth =>{
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const register = e=>{
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log(auth);

            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                className="login__logo"
                src="https://cdn.dribbble.com/users/2986805/screenshots/7203314/media/b60ec8b50cbade9c17ff50e461cb8d72.jpg?compress=1&resize=400x300"
                // src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204" 
                />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=> setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}
                     className="login__signInButton">Sign In</button>
                    <p>
                        By sign-in you agree to the AMAZON FAKE CLONE
                        Condition of use & sale, plese see our privacy notice
                         our cookies notice & interest based ad.
                    </p>
                    <button onClick={register} className="login__registerButton">Create Your Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
