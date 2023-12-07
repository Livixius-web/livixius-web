import './App.css';
import LivixiusWeb from './web-services/livixius-web/livixius-web';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = '/' exact element = {<LivixiusWeb />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
