import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainLeft from "./Components/Main/MainLeft";
import MainRight from "./Components/Main/MainRight";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />

      {/* main */}
      <div className="main">
        <h1>Dashboard</h1>

        <div className="main_container">
          <MainLeft />
          <MainRight />
        </div>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
