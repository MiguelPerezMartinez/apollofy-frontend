import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ResetPassword from "./pages/RecoverPassword";

//Redux actions
import { getState } from "./redux/isAuthorized/actions";

function App() {
  // Redux State to get the authorization
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.isAuthorized);

  // Get the state of authorization
  useEffect(() => {
    dispatch(getState());
  }, [dispatch]);

  // To check the authorization state in console
  if (isAuthorized.loaded) {
    if (isAuthorized.value) console.log("Estás autorizado!");
    else console.log("No estás autorizado!");
  }

  // Render a loading page while auth state is loading
  if (!isAuthorized.loaded) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <>
      <Switch>
        <Route path="/recover-password" component={ResetPassword} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
