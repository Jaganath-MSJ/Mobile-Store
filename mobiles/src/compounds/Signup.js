import { useState } from 'react';

function Signup () {
    const [userName, setUserName] = useState();
    const [passowrd, setPassword] = useState();

    const handleLogin = (event) => {
        event.preventDefault();
        fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, passowrd }),
            }).catch((error) => {
            console.error("Error:", error);
        });
    };
    
    return (
        <div className="login">
            <form>
                <input type="text" name="useName" placeholder='Enter your Username' value={userName} onChange={(e) => setUserName(e.target.value)} required />
                <input type="password" name="passowrd" placeholder='Enter your Password' value={passowrd} onChange={(e) => setPassword(e.target.value)} required />
                <input type="submit" name="login" placeholder='Login' onClick={handleLogin}/>
            </form>
        </div>
    )
}

export default Signup;