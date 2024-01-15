import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Index from './layout/Index';
import ScrollTop from './components/ScrollTop';

function App() {
  

  return (
      <BrowserRouter>
        <ScrollTop />
        <Index />
      </BrowserRouter>
  );
}

export default App;
