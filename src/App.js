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
            <Route path="playlists" element={<Playlists />} />
            <Route path="likes" element={<Likes />} />
            <Route path="history" element={<History />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
