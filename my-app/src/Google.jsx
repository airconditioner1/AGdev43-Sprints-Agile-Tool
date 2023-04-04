import { useEffect, useState} from "react";
import jst_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";


function Google(){

    const [user, setUser] = useState({});

    const navigate = useNavigate(); 

    function handleCallbackResponse(response){
      var userObject = jst_decode(response.credential)
      setUser(userObject);
      document.getElementById("signInDiv").hidden= true;
      navigate("/app-page")
    }

    function handleSignOut(e){
        setUser({});
        document.getElementById("signInDiv").hidden= false;
    }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "186388187474-cn3i4m9g8d8ak5g8vh4r7id5s7d2r2o4.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    );

  }, [])
  
  // If we have no user: show sign in, else, show sign out
  return (
  <div className="test">
    <div id="signInDiv"></div>
    {Object.keys(user).length != 0 &&
    <button onClick={(e) => handleSignOut(e)}>Sign out</button>
    }
    {user && <div><img src={user.picture}></img><h3>{user.name}</h3></div>}
  </div>
  
  )
}

export default Google
