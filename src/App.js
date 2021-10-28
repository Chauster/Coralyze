// import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Documentation from './pages/documentation';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import Faqs from './pages/faqs';
import PrivacyPolicy from './pages/privacy';
import Dashboard from './pages/Dashboard';
import AccountSettings from './pages/accountsettings';
import DeviceManagement from './pages/devicemanagement';
import DeviceModify from './pages/devicemodify';
import PageNotFound from './pages/pagenotfound';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Routing
import PrivateRoute from './routing/privateroute';
//login
//register
import ForgotPassword from './pages/forgotpassword';
import ResetPassword from './components/Authentication/resetpassword';

function App() {
  return (
    <>
      <Router>
        <div classname="App">
          {/* <Navbar /> */}
          <div className="content" id="main-container" data-scroll-container>
            <Switch>
              <PrivateRoute
                exact
                path="/dashboard"
                component={Dashboard}
              ></PrivateRoute>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/documentation" component={Documentation}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/forgotpassword" component={ForgotPassword}></Route>
              <Route
                exact
                path="/resetpassword/:resetToken"
                component={ResetPassword}
              ></Route>
              <Route path="/faqs" component={Faqs}></Route>
              <Route path="/privacypolicy" component={PrivacyPolicy}></Route>
              <Route path="/dashboard" component={Dashboard}></Route>
              <Route
                path="/accountsettings"
                component={AccountSettings}
              ></Route>
              <Route
                path="/devicemanagement"
                component={DeviceManagement}
              ></Route>
              <Route path="/devicemodify" component={DeviceModify}></Route>
              {/* <Route path="/admin" component={Admin}></Route> */}
              <Route path="*" component={PageNotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
