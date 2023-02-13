
import './App.css';
import User from "./components/User";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className='container'>
      <Navbar title = "User App 2" />
      <hr/>
      <User
      name = "Gizem"
      salary = "10000"
      department = "IT"
      />
      <hr/>
      <User
      name = "Cenk"
      salary = "50000"
      department = "Engineering"
      />
    </div>
  );
}

export default App;
