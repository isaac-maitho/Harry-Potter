import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar'
import Footer from './components/layout/Footer'
import { HarryPotterProvider } from "./contexts/harrypotter/characterContext";

function App() {
  return (
    <HarryPotterProvider>
    <Router>
    <div className="flex flex-col justify-between h-screen">
      <Navbar />

      <main className='container mx-auto px-3 pb-12'>
      <Alert />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  </HarryPotterProvider>
  );
}

export default App;
