import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="h-[100vh] w-full bg-slate-800">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
