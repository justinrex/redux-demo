import { NavLink as RouterNavLink } from 'react-router-dom';
import './NavLink.css';

export default function NavLink({ text, to }) {
  return <RouterNavLink className={({ isActive }) => `Nav__link${isActive ? ' active' : ''}`} to={to}>{text}</RouterNavLink>;
}
