import "./App.css";
import { Home } from "./pages/home/Home";
import { HeroSection } from "./pages/home/components/heroSection/HeroSection";
import { Routes, Route } from "react-router-dom";
import { Explore } from "./pages/explore/explore";
import { WithHeader } from "./shared/components/withHeader/WithHeader";
import Mockman from "./mockMan";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WithHeader />}>
          <Route path="mockApi" element={<Mockman />}></Route>
          <Route path="/" element={<Home />}>
            <Route index element={<HeroSection />} />
            <Route path="explore" element={<Explore />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
