import "./App.css";
import Header from "./componentts/Header/Header";
import Main from "./componentts/Main/Main";
import Footer from "./componentts/Footer/Footer";
function App1() {
  return (
    <>
      <div className="App">
        <div className="absolute-con"></div>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App1;
