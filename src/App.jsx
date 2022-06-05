import "./App.scss";
import Launchpad from "./components/Launchpad";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Nature from './routes/Nature';
import City from './routes/City';

function App() {
  console.log('app');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Launchpad />} />
        <Route path="nature" element={<Nature />} />
        <Route path="city" element={<City />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
