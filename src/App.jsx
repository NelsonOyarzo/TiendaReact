import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Categories from './views/Categories';
import Offers from './views/Offers';
import Checkout from './views/Checkout';
import Success from './views/Success';
import Failure from './views/Failure';
import Admin from './views/Admin';
import Login from './views/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

export default function App(){
  return (
    <AuthProvider>
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">TiendaOnline</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/categories">Categorías</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/offers">Ofertas</Link></li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute requireAdmin={true}><Admin /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  )
}