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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Chat" element={<Launchpad />} />
        <Route path="/Chat/nature" element={<Nature />} />
        <Route path="/Chat/city" element={<City />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
