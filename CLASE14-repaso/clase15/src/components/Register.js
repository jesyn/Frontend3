
import "../App.css"
import useInput from './useInput'

const Register = () => {

const fullName = useInput("")
const email = useInput("");
const passowrd = useInput("");

const submitForm = (event) => {
    event.preventDefault()
    alert(`
    Nombre completo: ${fullName.value},
    Email: ${email.value}
    Password: ${passowrd.value}`)
    }

return (
    <form onSubmit={submitForm} className="App">
        <h3>REGISTER</h3>
        <input onChange={fullName.onChange} placeholder="Fullname" value={fullName.value} />
        <input onChange={email.onChange} placeholder="Email" value={email.value} />
        <input onChange={passowrd.onChange} placeholder="Password" type="password" value={passowrd.value} />
        <button type="submit">Sign in</button>
    </form>
    )
}

export default Register