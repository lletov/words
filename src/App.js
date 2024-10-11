import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Tests } from './components/Tests';
import { WordsList } from './components/WordsList';
import { MainPage } from './components/MainPage';

function App() {
  return (
    <div className="App">
    <Header/>
    <HashRouter>
      <Routes>
      <Route path="/" element={<MainPage />} />
        <Route path="tests" element={<Tests />} />
        <Route path="wordslist" element={<WordsList />} />
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
