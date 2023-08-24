/* eslint-disable react/display-name */
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Login from "../pages/login";

export const withAuthorization = (WrappedComponent) => {
  return (props) => {
    const { user } = useContext(UserContext);
    if (user) {
      return <WrappedComponent {...props} />;
    } else {
      return <Login />;
    }
  };
};
