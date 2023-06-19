
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Customer from './page/Customer';


function App() {
  return (
    // <div className="App">
    //       <Customer/>
    //       </div>
      <BrowserRouter>
          <Routes>
          <Route path='/' element={<Customer/>} />
        
      </Routes>
      </BrowserRouter>
      
  );
}

export default App;
