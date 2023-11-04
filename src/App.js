import {useState} from "react"
import './App.css';
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import { UserData } from "./contexts/GlobalContext";

//use context api is basically a better more advanced way of using props..should be using this instead wayyy better and easier
function App() {

  const [name, setName] = useState("Rio");
  const [age, setAge] = useState(51)
  return (
    <div className="App">
      <UserData.Provider value={{name, setName, age}}>
      <Home/>
      <Profile />
      </UserData.Provider>
    </div>
  );
}

export default App;
