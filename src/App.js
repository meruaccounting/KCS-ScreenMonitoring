import logo from "./logo.svg";

import "./App.css";
import "./Header.css";
import "./Footer.css";
import "./highlights.css";
import "./horizontaldate.css";
import "./screenshotdisp.css";
import "./timeline.css";
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import HorizontalDate from "./components/HorizontalDate";
import Timeline from "./components/Timeline";
import Highlights from "./components/highlights";
import Screenshotdisp from "./components/Screenshotdisp";


function App() {
  
  return (
    <div>
      <Header />
      <HorizontalDate />
      <Highlights />
      <Timeline />
      <Screenshotdisp />
      <Footer />
     
    </div>
  );
}

export default App;
