import { Navigate, Route, Routes, Link } from 'react-router-dom';
import Nav from '../Nav';
import LifeCycle from '../LifeCycle';
import Refs from '../Refs';
import ButtonDemo from '../ButtonDemo';
import './App.css';

export default function App({ trackBreadCrumb }) {
  const handleKeyDown = ({ target, type }) => {
    const element = target.closest?.('[data-tag]')?.getAttribute('data-tag');
    if (element && trackBreadCrumb) void trackBreadCrumb({ element, type });
  };

  return (
    <div className="App" onKeyDown={handleKeyDown} role="presentation">
      <header>
        <h1>Redux Demo</h1>
        <p>Small experiments in shared state, derived values, lifecycle, and refs.</p>
      </header>
      <Nav />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/demo" replace />} />
          <Route path="/demo" element={<ButtonDemo />} />
          <Route path="/lifecycle" element={<LifeCycle />} />
          <Route path="/refs" element={<Refs />} />
          <Route path="*" element={<><h2>Page not found</h2><Link to="/demo">Back to the counter</Link></>} />
        </Routes>
      </main>
    </div>
  );
}
