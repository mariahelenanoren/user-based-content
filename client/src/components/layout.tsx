import { CSSProperties } from 'react';
import { Route, Switch } from 'react-router-dom';
// import LandingPage from './landingPage';
// import RegistrationPage from '/registrationPage.tsx';
import LoginPage from './loginPage';

interface Props {}

const Layout: React.FC<Props> = () => {
   return (
      <div style={ mainStyle }>
         <Switch>
            {/* <Route exact path="/" component={LandingPage} /> */}
            {/* <Route path="/registration" component={RegistrationPage} /> */}
            <Route path="/login" component={LoginPage} />
         </Switch>
      </div>
   );
};

export default Layout;

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
