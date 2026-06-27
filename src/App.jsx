import React from 'react';
import { HashRouter as Router, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const Layout = () => {
  return (
    <>
      <nav>
        <span className="nav-name">oriol.soldevila</span>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
      
      <main className="page-content">
        <Outlet />
      </main>

      <footer>Oriol Soldevila Gargallo &mdash; 2026</footer>
    </>
  );
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}