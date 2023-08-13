import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage'
import Footer from './components/Footer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <NotesListPage />
      <br />
      <Footer />
    </div>
  );
}

export default App;
