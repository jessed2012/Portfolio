import Header from './components/layout/Header';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { About } from './components/About';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <About />
    </div>
  );
}

export default App;
