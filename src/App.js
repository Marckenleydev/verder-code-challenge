
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Posts from './pages/NewPosts';
import userPosts from './pages/userPosts';
import Home from './pages/Home';
function App() {
  return (
    <div className="bg-gray-100 h-full">
    
    <div className=" py-8 mx-auto w-5/6">
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/post/:id" element={<Posts/>} />
      {/* <Route path="/post" element={<Posts/>} /> */}
      <Route path="/userpost/:id" element={<userPosts/>} />
   
     </Routes>
  

    </div>
    </div>
  );
}

export default App;
