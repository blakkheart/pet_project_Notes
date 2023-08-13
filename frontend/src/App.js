import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage'
import Footer from './components/Footer';
import NotePage from './pages/NotePage';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='container dark'>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' exact element={<NotesListPage />} />
          </Routes>
          <Routes>
            <Route path='note/:id' element={<NotePage />} />
          </Routes>
          <br />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
