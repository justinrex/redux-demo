import NavLink from './components/NavLink';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="Nav" aria-label="Examples">
      <NavLink text="Demo" to="/demo" />
      <NavLink text="Lifecycle" to="/lifecycle" />
      <NavLink text="Refs" to="/refs" />
    </nav>
  );
}
