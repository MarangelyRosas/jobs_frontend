// Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

// Pages
 import Home from "./Pages/Home";
 import Index from "./Pages/Index";
 import New from "./Pages/New";
 import Show from "./Pages/Show";
 import Edit from "./Pages/Edit";
 import FourOFour from "./Pages/FourOFour";

// Components
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Index />} />
            <Route path="/jobs/new" element={<New />} />
            <Route exact path="/jobs/:id" element={<Show />} />
            <Route path="/jobs/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
