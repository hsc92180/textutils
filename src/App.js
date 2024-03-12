//import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
//let name = "Himanshu Singh Chauhan";

// creating a new component which we can reuse
// function Navbar(){
//   return(
//     <>
//       <nav classNameNameName = "navbar">
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </nav>
//     </>
//   )
// }
function App() {
  return (
    <>
      {/* <nav className="navbar">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      </nav> 
      --------below way to use components------- */}

      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below :"/>
      </div>
    </>
  );
}

export default App;
