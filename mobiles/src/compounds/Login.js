import { useState } from 'react';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login () {
    const [email, setEmail] = useState();
    const [passowrd, setPassword] = useState();

    const handleLogin = (event) => {
        event.preventDefault();
        fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, passowrd }),
            }).catch((error) => {
            console.error("Error:", error);
        });
    };
    
    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <input type="email" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" name="passowrd" placeholder='Password' value={passowrd} onChange={(e) => setPassword(e.target.value)} required />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login;