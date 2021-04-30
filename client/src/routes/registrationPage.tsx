import { CSSProperties, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { makeRequest } from '../helper';
interface State {
  role: string;
}

interface Props extends RouteComponentProps<{}, {}, State> {}

function RegistrationPage(props: Props) {
  const role = props?.location?.state?.role || "user";
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    role: role,
  });
  async function registerUser() {
    const body = user;
    const status = await makeRequest("/api/register", "POST", body);
    console.log(status);
  }
  const handleChange = (key: string, value: string) => {
    console.log(key, value);
    setUser((prevState) => ({ ...prevState, [key]: value }));
    console.log(user);
  };

  return (
    <div style={mainStyle}>
      <div style={box}>
        <div style={title}>Skapa ett Postr konto</div>
        <div>
          <input
            required
            style={input}
            type="firstName"
            name="firstName"
            id="firstName"
            placeholder={"Förnamn"}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
          <input
            required
            style={input}
            type="lastName"
            name="lastName"
            id="lastName"
            placeholder={"Efternamn"}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
          <input
            required
            style={input}
            type="userName"
            name="userName"
            id="userName"
            placeholder={"Användarnamn"}
            onChange={(e) => handleChange("userName", e.target.value)}
          />
          <input
            required
            id="email"
            style={input}
            type="email"
            name="email"
            placeholder={"Epost"}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <div>
          <input
            required
            id="password"
            style={input}
            type="password"
            name="password"
            placeholder={"Lösenord"}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
        <div>
          <button style={button} onClick={registerUser}>
            Registrera dig
          </button>
        </div>
        <div style={linkText}>
          <Link className="textButton" to="">Admin? Registrera dig här</Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(RegistrationPage);

const mainStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#111111',

};
const box: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%em',
  height: '25rem',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#111111',
 
};
const title: CSSProperties = {
   color: '#d3dde4',
   fontSize: '2.5rem',
   marginBottom: '2rem',
   fontWeight: 500,
};
const input: CSSProperties = {
  background: '#000000',
  margin: '0.5rem',
  width: '18rem',
  height: '2.5rem',
  borderColor: '#656874',
  color: 'white',
  borderWidth: 1,
  display: 'flex',
  flexDirection: 'column',
};
const button: CSSProperties = {
  backgroundColor: '#4780EE',
  color: '#ffff',
  border: "none",
  borderRadius: "0.5rem",
  fontSize: "0.9rem",
  fontWeight: 600,
  margin: '0.3rem',
  width: '10rem',
  height: '2rem',
  cursor: 'pointer',
  marginTop: '1rem',

};
const linkText: CSSProperties = {
  color: '#4780EE',
  fontSize: '0.7rem',
  display: 'flex',
  flexDirection: 'column',
  textDecoration: 'none',
};
