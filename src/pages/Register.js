import "../App.css"
import { NavLink } from "react-router-dom"
import { registerFunc, getAuthUserData} from "../http/UserAPI"; 
import { useContext, useState} from "react"
import { Context } from "../App";

function Register() {
  const {user} = useContext(Context)
  const [_username, setUsername] = useState('')
  const [_password, setPassword] = useState('')

  const reg = async () => {
    try{
      let response = await registerFunc(_username, _password);
      alert(response.data.message)
      const userData = await getAuthUserData(_username, _password)
      user.setUser(userData.data)
      window.location.href= '/'
    }
    catch(e) {
      alert(e.response.data.message)
    }
  }

    return (
      <div className="chat center">
        <p>Stanukevich Chat</p>
        <form className="form-auth">
          <label htmlFor="#form-auth-login">Your login</label>
          <input type="text" className="form-auth-input" itemID="form-auth-login" value={_username} onChange={e => setUsername(e.target.value)} />
          <label htmlFor="#form-auth-password">Your password</label>
          <input type="password" className="form-auth-input" itemID="form-auth-password" autoComplete="off" value={_password} onChange={e => setPassword(e.target.value)} />
          <input type="button" className="form-auth-button" value="Confirm" onClick={reg} />
          <NavLink to="/" end>
              <input type="button" className="form-auth-button" value="Cancel" />
          </NavLink>
        </form>
      </div>
    );
  }
  
export default Register;