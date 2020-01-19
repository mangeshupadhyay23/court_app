import React from 'react';
import './Login.css';

//Component to render the Login Page
class Login extends React.Component{
    render(){
        return(
            <div className="login-container">
                <div className="login-card">
                    <div className="login-info">
                        <h1>Welcome User</h1>
                        <form>
                            <input type="text" name="username" placeholder="Username"></input>
                            <br />
                            <input type="password" name="password" placeholder="Password"></input>
                        </form>
                    </div>
                    <div className="login-buttons">
                        <button>Login</button>
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;