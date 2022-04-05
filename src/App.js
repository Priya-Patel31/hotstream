import "./App.css";
import { Home } from "./pages/home/Home";
import { HeroSection } from "./pages/home/components/heroSection/HeroSection";
import { Routes, Route } from "react-router-dom";
import { Explore } from "./pages/explore/explore";
import { WithHeader } from "./shared/components/withHeader/WithHeader";
import Mockman from "./mockMan";
import { WatchLater } from "./pages/watchLater/WatchLater";
import { History } from "./pages/history/History";
import { Playlists } from "./pages/playlists/Playlists";
import { Likes } from "./pages/likes/Likes";
import {Login} from "./pages/auth/Login"
import {Signup} from "./pages/auth/Signup"
import { useAuth } from "./context/auth/authContext";
import { Modal } from "./shared/components/modal/Modal";
function App() { 
  const {isUserLoggedIn} = useAuth();
  return (
    <div className="App">
       <Modal/>
      <Routes>
      <Route path="mockApi" element={<Mockman />}></Route>
     
        <Route path="/" element={<WithHeader />}>
          
          <Route path="/" element={<Home />}>
            <Route index element={<HeroSection />} />
            <Route path="explore" element={<Explore />} />
            <Route path="watchlater" element={<WatchLater />} />
            <Route path="playlists" element={<Playlists />} />
            <Route path="likes" element={<Likes />} />
            <Route path="history" element={<History />} />
          </Route>
        </Route>
        
        {!isUserLoggedIn && (
         <>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
       </>
         )}
       
      </Routes>
    </div>
  );
}

export default App;
