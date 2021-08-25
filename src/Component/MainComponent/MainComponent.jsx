import Navbar from "../Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../LoginData/Login";
import RePassword from "../LoginData/RePassword";
import Signup from "../LoginData/SingnUp";
import PrivateRoute from "../../Utils/PrivateRoutes";
import EditMyProfile from "../LoginData/EditMyProfile";

function MainCompoonent() {
  var email = localStorage.getItem("email");
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/home" component={Navbar} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/repass" component={RePassword} />
          <Route exact path="/edit" component={EditMyProfile} />
        </Switch>
      </Router>
    </>
  );
}

export default MainCompoonent;
