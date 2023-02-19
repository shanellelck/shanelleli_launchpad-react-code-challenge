import './App.css';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from './Home';
import Universities from './Universities';
import PostalLookup from './PostalLookup';
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import store from './store/store';



function App() {
  return (
    <div className='App'>
      <Provider store={store}>
      <Router>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/Universities" element={<Universities />}>
            </Route>
            <Route path="/PostalLookup" element={<PostalLookup />}>
            </Route>
          </Routes>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
