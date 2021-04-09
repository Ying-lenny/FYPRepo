import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const { history } = props;

  return context.isAuthenticated ? (
    <a>
      Welcome {context.userName}! <button onClick={() => context.signout()}>Sign out</button>
    </a>
  ) : (
    <a>
      You are not logged in{" "}
      <button onClick={() => history.push("/login")}>Login</button>
    </a>
  ); 
};

export default withRouter(BaseAuthHeader);
