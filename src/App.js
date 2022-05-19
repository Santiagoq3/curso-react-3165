import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a mi catalogo 🎮🔥" />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting="Bienvenidos a mi catalogo 🎮🔥" />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
