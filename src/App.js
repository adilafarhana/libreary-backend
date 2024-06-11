import logo from './logo.svg';
import './App.css';
import SearchStudent from './component/SearchStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeleteStudent from './component/DeleteStudent';
import ViewStudent from './component/ViewStudent';
import AddStudent from './component/AddStudent';

function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<AddStudent/>}/>
    <Route path='/search' element={<SearchStudent/>}/>
    <Route path='/delete' element={<DeleteStudent/>}/>
    <Route path='/viewAll' element={<ViewStudent/>}/>
    </Routes>
    </BrowserRouter>
  

</div>
  );
}

export default App;
