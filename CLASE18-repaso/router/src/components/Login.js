import {useState} from 'react'
import "../styles/Login.css"

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    

    const handleChange = (event, key) => setUsername({[key]: event.target.value});

    const handleChange2 = (event, key) => setPassword({[key]: event.target.value});
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Logueado");
    }

        return (
            <form className="login__container">
                <div>
                    <label className="labelStyle" >Username:</label>
                    <input  type="text" value={username} onChange={(event) => handleChange(event,"username")}  />
                </div>
                <div>
                    <label className="labelStyle" >Password:</label>
                    <input type="password" value={password} onChange={(event) => handleChange2(event,"password")}  />
                </div>
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        )

}