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
               <div>
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
   height: '100vh',
   justifyContent: 'center',
   alignItems: 'center',
   textAlign: 'center',
   backgroundColor: '#1f1f1f',
};
const box: CSSProperties = {
   display: 'flex',
   flexDirection: 'column',
   background: '#1f1f1f',
   width: '25rem',
   height: '25rem',
   justifyContent: 'center',
   alignItems: 'center',
   textAlign: 'center',
};
const title: CSSProperties = {
   color: '#d3dde4',
   fontSize: '3rem',
   marginBottom: '2rem',
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
   background: '#2554c1',
   borderRadius: 6,
   color: '#d3dde4',
   fontSize: '1.3rem',
   fontStretch: 'expanded',
   margin: '1rem',
   width: '12rem',
   height: '2.5rem',
};
