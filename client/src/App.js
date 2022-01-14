// Dependences
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/home';
import Main from './pages/main';

function App() {
   
    return (
        <Routes>
            <Route path="/" element={ <Home/>} />           
            <Route path="main" element={ <Main/>} />
        </Routes>
    );
}

export default App;
