import { CSSProperties } from "react";
import { Route, Switch } from 'react-router-dom';

import LoginPage from './loginPage';
// import RegistrationPage from '/registrationPage.tsx';

interface Props {}

const Layout: React.FC<Props> = () => {

return (
    <div style={{ ...mainStyle, ...background }}>
        <Switch>
            {/* <Route exact path="/" component={LandingPage} /> */}   
            {/* <Route path="/registration" component={RegistratioPage} /> */}
            <Route path="/login" component={LoginPage} />
        </Switch>
    </div>
   );
};

export default Layout;

const mainStyle: CSSProperties = {   
         display: 'flex',
         flexGrow: 1,
         flexBasis: 0,
    };

const background: CSSProperties = {
    background: 'black'
};