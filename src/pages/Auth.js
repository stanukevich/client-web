import "../App.css"
import { NavLink } from "react-router-dom"
import { loginFunc, getAuthUserData, getMessages} from "../http/UserAPI"; 
import { useContext, useState } from "react"
import { Context } from "../App";
// import axios from "axios"

function Auth() {
  const {user} = useContext(Context)

  const [_username, setUsername] = useState('')
  const usernameHandleChange = event => {
    setUsername(event.target.value);
  };

  const [_password, setPassword] = useState('')
  const passwordHandleChange = event => {
    setPassword(event.target.value);
  };

    const signIn = async () => {
      try{
        await loginFunc(_username, _password);
        const userData = await getAuthUserData(_username, _password)
        const messagesList = await getMessages()
        user.setUser(userData.data)
        user.setIsAuth(true)
        user.setMessages(messagesList.data)
      }
      catch(e) {
        alert(e.response.data.message)
      }
    }
    
    return (
      <div className="chat center">
        <p>Stanukevich Chat</p>
        <form className="form-auth">
          <label htmlFor="#form-auth-login">Login</label>
          <input type="text" className="form-auth-input" itemID="form-auth-login" value={_username} onChange={usernameHandleChange} />
          <label htmlFor="#form-auth-password">Password</label>
          <input type="password" className="form-auth-input" itemID="form-auth-password" autoComplete="off" value={_password} onChange={passwordHandleChange} />
          <input type="button" className="form-auth-button" value="Login" onClick={signIn} />
          <NavLink to="/register" end>
            <input type="button" className="form-auth-button" value="Register" />
          </NavLink>
        </form>
      </div>
    );
  }
  
export default Auth;