import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import AppRouter from './routes/AppRouter';

function App() {

  return (
    <div className="App">
      
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <AppRouter />
          </BrowserRouter>
        </CartProvider>
      
    </div>
  );
}

export default App;
