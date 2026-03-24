import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/style.css'; 

// Import all five pages
import HomePage from './HomePage';
import OmOss from './OmOss';
import MinaHundar from './MinaHundar';
import Valpar from './Valpar';
import Kontakt from './Kontakt';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/mina-hundar" element={<MinaHundar />} />
        <Route path="/valpar" element={<Valpar />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  );
}

export default App;