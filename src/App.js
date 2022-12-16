import Navbar from "./Components/Navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import {AuthContextProvider} from "./Context/AuthContext";
import SignUp from "./Pages/SignUp";
import Account from "./Pages/Account";
import Proctected from "./Components/Proctected";

function App() {
  return (
    <div >
      <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Account" element={<Proctected><Account/></Proctected>} /> 
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
