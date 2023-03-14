import React, { useState, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
// import { useMutation } from "react-query";
// import { useRecoilState } from "recoil";
// import { userState } from "../recoil";
// import { me } from "../services";

const PrivateRoute = ({ component: Component, history, match, location, ...rest }) => {
  //   const [user, setUser] = useRecoilState(userState);
  //   const [loading, setLoading] = useState(false);

  //   const { mutate, isLoading } = useMutation(() => me(), {
  //     retry: false,
  //     onSuccess: (res) => {
  //       setUser(res?.data?.admin);
  //     },
  //     onError: (err) => {
  //       history.push("/login");
  //       localStorage.clear();
  //       setLoading(false);
  //     },
  //   });

  //   useEffect(() => {
  //     const Token = localStorage.getItem("JSON_WEB_TOKEN");
  //     if (Token) {
  //       setLoading(true);
  //       // console.log("private routes", user);
  //       if (!user?._id) {
  //         mutate();
  //       } else {
  //         setLoading(false);
  //       }
  //     } else {
  //       history.push("/login");
  //       localStorage.clear();
  //       setLoading(false);
  //     }
  //   }, [user?._id]);

  //   if (isLoading || loading)
  //     return (
  //       <div
  //         style={{
  //           height: "100vh",
  //           width: "100vw",
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           background: "#000",
  //         }}
  //       >
  //         <img src="images/logo.png" />
  //       </div>
  //     );
  //   else
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default withRouter(PrivateRoute);
