import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Index from './layout/Index';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Index />
      </div>
    </BrowserRouter>
  );
}

export default App;
