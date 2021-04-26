import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const RegistrationPage: React.FC<Props> = () => {
   return (
      <div style={mainStyle}>
         <div style={box}>
            <form>
               <div style={title}>Logga in på Postr</div>
               <div>
               <input style={input} type="firstName" name="firstName" id="firstName" placeholder={'Förnamn'}/>
               <input style={input} type="lastName" name="lastName" id="lastName" placeholder={'Efternamn'}/>
               <input style={input} type="userName" name="userName" id="userName" placeholder={'Användarnamn'}/>
                  <input
                     style={input}
                     type="email"
                     name="email"
                     id="email"
                     placeholder={'Epost'}
                  />
               </div>
               <div>
                  <input
                     style={input}
                     type="password"
                     name="password"
                     id="password"
                     placeholder={'Lösenord'}
                  />
               </div>
               <div>
                  <input
                     style={input}
                     type="password"
                     name="password"
                     id="password"
                     placeholder={'Verifiera lösenord'}
                  />
               </div>
               <div>
                  <button style={button}>Registrera dig</button>
               </div>
               <div>
               <Link to="">Admin? Registrera dig här</Link>
               </div>
            </form>
         </div>
      </div>
   );
};

export default RegistrationPage;

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
   margin: '1rem',
   width: '18rem',
   height: '2.5rem',
   borderColor: '#656874',
   borderWidth: 1,
};
const button: CSSProperties = {
   background: '#2554c1',
   borderRadius: 6,
   color: '#d3dde4',
   fontSize: '1.1rem',
   margin: '1rem',
   width: '12rem',
   height: '2.5rem',
};