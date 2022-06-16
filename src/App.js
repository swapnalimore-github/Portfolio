import { Route, Routes } from 'react-router-dom';
import { LeftAside } from './Components/LeftAside';
import { About } from './Pages/About';
import { Portfolio } from './Pages/Portfolio';
import { HireMe } from './Pages/HireMe';

function App() {
  return (
    <main className='main'>
      <LeftAside />
      <div className='right-container'>
        <Routes>
          <Route path='/about-me' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/hire-me' element={<HireMe />} />
        </Routes>
        </div>
    </main>
  );
}

export default App;
