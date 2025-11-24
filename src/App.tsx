import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Details from './components/Details';
import Travel from './components/Travel';
import QA from './components/QA';
import Gallery from './components/Gallery';

function Layout() {
  return (
    <div className="layout">
      <nav className="top-nav">
        <Link to="/">Home</Link>
        <Link to="/details">Details</Link>
        <Link to="/travel">Travel</Link>
        <Link to="/qa">Q & A</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="travel" element={<Travel />} />
          <Route path="qa" element={<QA />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
