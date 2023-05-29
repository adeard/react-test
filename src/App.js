import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutpage from './components/fungsional/aboutComp';
import Homepage from './components/fungsional/homepage';
import NavbarComp from './components/fungsional/navbarComp';
import DetailComp from './components/fungsional/detailComp';
import ListComp from './components/class/listComp';
import TambahComp from './components/class/tambahComp';

const App = () => {
  return (
    <div>
      <NavbarComp />
      <BrowserRouter>      
      <Routes>
        <Route path='/' Component={Homepage} />
        <Route path='/about' Component={Aboutpage} />
        <Route path='/mahasiswa' Component={ListComp} />
        <Route path='/mahasiswa/tambah' Component={TambahComp} />
        <Route path='/detail/:id' element={<DetailComp />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
