import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Main from './components/Main';
import Wishes from "./components/Wishes";
import Journey from './components/Journey'

const App=()=>(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="/wishes" element={<Wishes/>}/>
      <Route path="/journey" element={<Journey/>}/>
    </Routes>
  </BrowserRouter>
)


export default App