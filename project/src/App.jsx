import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';
import CleanUp from './components/CleanUp';
import User from './components/User';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="callback" element={<Counter />} />
          <Route path="cleanup" element={<CleanUp />} />
          <Route path="users/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
