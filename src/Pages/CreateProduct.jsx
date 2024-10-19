import React, { Fragment, useContext } from "react";
import Create from "../Components/CreateProduct";
import { AuthContext } from "../ContextStore/AuthContext";
import Login from "../Components/Login";

const CreateProductPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <Fragment>
      {user ? (
        <Create />
      ) : (
        <>          
          {alert("You must login first")} <Login />
        </>
      )}
    </Fragment>
  );
};

export default CreateProductPage;