import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ExploreJobs from "./components/ExploreJobs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ExploreJobs></ExploreJobs>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
        </Routes>
        <Navbar></Navbar>
      </Router>
    </>
  );
}

export default App;
