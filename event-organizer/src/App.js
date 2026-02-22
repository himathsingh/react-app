import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Register from './component/Register';
import Students from './component/Students';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleCloseForm = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleSwitchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const handleSwitchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <div className="App">
      <Navbar 
        title="SREENIDHI UNIVERSITY" 
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        onNavigate={handleNavigate}
      />
      {showLogin && <Login onClose={handleCloseForm} onSwitchToRegister={handleSwitchToRegister} />}
      {showRegister && <Register onClose={handleCloseForm} onSwitchToLogin={handleSwitchToLogin} />}
      
      {currentPage === 'home' && (
        <header className="App-header">
          <h1>Welcome to SREENIDHI UNIVERSITY</h1>
          <p>Select an option from the navigation menu</p>
        </header>
      )}
      
      {currentPage === 'students' && <Students />}
    </div>
  );
}

export default App;
