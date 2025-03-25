import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/Home');
    }

    return (
        <div class='ml-3 mt-3'>
            <h2>login Form</h2>
            <div class="div1">
                <form name="Form" method="post">
                    <label>Username</label>
                    <input type="text" name="Uname" class="inputText" placeholder='User Name'></input>
                    <br></br>
                    <label>Password</label>
                    <input type="password" name="Pass" class="inputText" placeholder='Password'></input>
                    <br></br>
                    <input type="button" name="log" class="logButton" value="login" onClick={handleClick}></input>
                </form>
            </div>
        </div>
    );
}

export default Login;