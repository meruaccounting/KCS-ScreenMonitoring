import logo from "./logo.svg";
import "./App.css";
import "./Header.css";
import "./Footer.css";
import "./highlights.css";
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import HorizontalDate from "./components/HorizontalDate";
import Timeline from "./components/Timeline";
import Highlights from "./components/highlights";
function App() {
  return (
    <div>
      <Header />
      <HorizontalDate />
      <Highlights />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
