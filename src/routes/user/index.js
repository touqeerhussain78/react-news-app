
import PublicRoute from "./public.routes";

import Login from "../../views/modules/user/auth/Login";
import Home from "../../views/modules/user/home";

function UserRoutes({ match }) {
  return (
    <>
      <PublicRoute path={`${match.url}/login`} exact element={Login} />
      <PublicRoute path={`${match.url}/home`} exact element={Home} />
    </>
  );
}

export default UserRoutes;
