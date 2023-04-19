import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import { useState } from "react";

function DummyPage() {
  console.log(Cookies.get('authenticated'));
  function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
  };
  // useForceUpdate();

  if(Cookies.get('authenticated') === 'true'){
    console.log("AUTHENTICATED");
    console.log(Cookies.get('authenticated'));
    console.log(Cookies.get('user_email'));
    return (
      <div className="container p-5">
        <h2>This is {Cookies.get("user_email")}</h2>
        <h1>Welcome to Story Poker</h1>
      </div>
    );
  }
  else{
    console.log(Cookies.get('authenticated'));
    var name = "lmao";
    function changeName(){
      name = "oaml";
    }
    return (
      <div className="container p-5" style={{color:'red'}}>
        <h2>Please sign into Sprints!</h2>
      </div>
    )
  }
  
}

export default DummyPage;
