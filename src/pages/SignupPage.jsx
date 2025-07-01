import BackButton from "../components/BackButton";

function Signup() {
    return (
        <div>   
            <input type="text" name="email" placeholder="Email..."></input>
            <input type="text" name="password" placeholder="Password..."></input>
            <button type="submit">Submit</button>
            <BackButton />
        </div>
    )
}

export default Signup;