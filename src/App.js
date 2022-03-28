import "./App.css";
import { Home } from "./pages/home/Home";
import { Header } from "./shared/components/header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
    </div>
  );
}

export default App;
