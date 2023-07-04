

import { Navigate } from "react-router-dom";
const Private_routing = ({ children }) => {
  //     <Home />
  const isUser = JSON.parse(localStorage.getItem("isUser"));

  if (!isUser) {
    // true
    return <Navigate to="/signup" />;
  }
   

  return children;
};

export default Private_routing;