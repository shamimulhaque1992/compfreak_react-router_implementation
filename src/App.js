import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Dashboard from "./components/Dashboard/Dashboard";
import Explore from "./components/Explore/Explore";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Notfound from "./components/Notfound/Notfound";
import Review from "./components/Review/Review";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/aboutus" element={<About></About>}></Route>
        <Route path="/service" element={<Services></Services>}></Route>
        <Route path="/explore" element={<Explore></Explore>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
