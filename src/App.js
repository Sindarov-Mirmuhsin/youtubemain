import React from "react";
import { Context } from "./Context/TokenContext";
import AuthenticationApp from "./AuthenticationApp";
import UnAuthenticationApp from "./UnAuthenticationApp";
import { Routes, Route } from "react-router-dom";
import Trending from "./Trending";

function App() {
  const { token } = React.useContext(Context);

  if (token) {
    return (
      <>
        <AuthenticationApp />
        {/* <Routes>
          <Route path="/trending/:id" element={<Trending />} />
        </Routes> */}
      </>
    );
  } else {
    return <UnAuthenticationApp />;
  }
}

export default App;
