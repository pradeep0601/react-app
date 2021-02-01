import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Contact from './Contact';
import About from './About';
import UserInfo from '../forms/UserInfo';

const NavBar = () => {
    return(
        <Router>
        <ul className = 'navbar'>
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/user_info">User Info</Link>
                </li>
                <li>
            <Link to = "/about">About</Link>
            </li>
            <li>
            <Link to = "/contact">Contact</Link>
            </li>
        </ul>
        <Switch>
            {/* <Route exact path = "/" render={()=> <div>Home page</div>}></Route> */}
            <Route exact path = "/">
                <Home/>
            </Route>
            <Route exact path = "/about">
                <About></About>
            </Route>
            <Route exact path = "/contact">
                <Contact></Contact>
            </Route>
            <Route exact path = "/user_info">
                <UserInfo></UserInfo>
            </Route>
        </Switch>
        </Router>
    );
}

export default NavBar;