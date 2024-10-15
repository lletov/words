import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Tests } from './components/Tests';
import { WordsList } from './components/WordsList';
import { MainPage } from './components/MainPage';
import { Test } from './components/Test';
import { NotFound } from './components/NotFound';
import useTestStore from './store/Store';

function App() {

  return (
    <div className="App">
    <Header/>
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tests">
          <Route index element={<Tests />} />
          <Route path="/tests/:wordsAmount" element={<Test />} />
        </Route>
        <Route path="/wordslist" element={<WordsList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
