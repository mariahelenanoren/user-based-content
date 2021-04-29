import { CSSProperties, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeRequest } from '../helper';

interface Props {}

const LoginPage: React.FC<Props> = () => {
   const [user, setUser] = useState({
      userName: "",
      password: "",
   })
   async function loginUser() {
      const body = user;
      const status = await makeRequest("/api/login", "POST", body)
      console.log(status)
   }
   const handleChange = (key: string, value: string) => {
      setUser(prevState => ({...prevState, [key]: value}))
   }
   
   return (
      <div style={mainStyle}>
         <div style={box}>
               <div style={title}>Logga in på Postr</div>
               <div>
                  <input
                     style={input}
                     type="userName"
                     name="userName"
                     id="userName"
                     placeholder={'Användarnamn'}
                     onChange={(e) => handleChange("userName", e.target.value)}
                  />
               </div>
               <div>
                  <input
                     style={input}
                     type="password"
                     name="password"
                     id="password"
                     placeholder={'Lösenord'}
                     onChange={(e) => handleChange("password", e.target.value)}
                  />
               </div>
               <div>
                  <button style={button} onClick={loginUser}>Logga in</button>
               </div>
               <div style={linkStyles}>
               <Link to="">Har du glömt ditt lösenord? </Link>
               <Link to="/registration">Registrera dig för Postr</Link>
               </div>
         </div>
      </div>
   );
};

export default LoginPage;

const mainStyle: CSSProperties = {
   display: 'flex',
   flexDirection: 'column',
   width: '100%',
   height: '100%',
   justifyContent: 'center',
   alignItems: 'center',
   textAlign: 'center',
   backgroundColor: '#1f1f1f',
};
const box: CSSProperties = {
   display: 'flex',
   flexDirection: 'column',
   background: '#1f1f1f',
   width: '100%em',
   height: '25rem',
   justifyContent: 'center',
   alignItems: 'center',
   textAlign: 'center',
};
const title: CSSProperties = {
   color: '#d3dde4',
   fontSize: '2.5rem',
   marginBottom: '2rem',
   fontWeight: 500,
};
const input: CSSProperties = {
   background: '#1f1f1f',
   margin: '0.5rem',
   width: '18rem',
   height: '2.5rem',
   borderColor: '#656874',
   borderWidth: 1,
};
const button: CSSProperties = {
   backgroundColor: '#4780EE',
   color: '#ffff',
   border: "none",
   borderRadius: "0.5rem",
   fontSize: "0.9rem",
   fontWeight: 600,
   margin: '0.3rem',
   width: '9rem',
   height: '2rem',
   cursor: 'pointer',

};

const linkStyles: CSSProperties = {
   display: 'flex',
   flexDirection: 'column',
   textDecoration: 'underline',
   color:  '#4780EE',
   marginTop: '0.5rem',
}

