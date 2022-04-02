import "./App.css";
import { Home } from "./pages/home/Home";
import { HeroSection } from "./pages/home/components/heroSection/HeroSection";
import { Routes, Route } from "react-router-dom";
import { Explore } from "./pages/explore/explore";
import { WithHeader } from "./shared/components/withHeader/WithHeader";
import Mockman from "./mockMan";
import { WatchLater } from "./pages/watchLater/WatchLater";
import {Login} from "./pages/auth/Login"
import {Signup} from "./pages/auth/Signup"
function App() { 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WithHeader />}>
          <Route path="mockApi" element={<Mockman />}></Route>
          <Route path="/" element={<Home />}>
            <Route index element={<HeroSection />} />
            <Route path="explore" element={<Explore />} />
            <Route path="watchlater" element={<WatchLater />} />
          </Route>
        </Route>
        {/* {!isUserLoggedIn && ( */}
        
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
       
        {/* )} */}
      </Routes>
    </div>
  );
}

export default App;
