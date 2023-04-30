import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="callback" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
