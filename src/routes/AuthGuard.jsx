import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../../src/utils/helpers";

export default function AuthGuard({children}) {
    const navigate = useNavigate();
    
    // disallow user to access this page if user is loggedin 
      useEffect(() => {
          if(getAccessToken()){
              navigate('/home');

        }
      }, []);
  return (
    <>
    {children}  
    </>
  )
}