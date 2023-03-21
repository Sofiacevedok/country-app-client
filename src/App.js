import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/lendingPage/Home';
import CountryViews from './components/countryViews/index.js';
import CreateActivity from './components/createActivity/index.js';
import CountryDetail from './components/countryDetail/index'; //poner: countryDetail/index.js

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries" element={<CountryViews />} />
      <Route path="/countries/:idPais" element={<CountryDetail />} />
      <Route path="/activity" element={<CreateActivity />} />
    </Routes>
  );
}

export default App;
