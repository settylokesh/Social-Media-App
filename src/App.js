import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import RegistrationForm from './components/RegistrationForm';
import LogIn from './components/LogIn';
import { AuthProvider } from './components/auth';
import { RequireAuth } from './components/RequireAuth';



function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <center>Social Media App</center>
        </h1>
      </header>

      <AuthProvider>

        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/profile" element={<RequireAuth><Profile  /></RequireAuth>} />
        </Routes>
        
      </AuthProvider>
    </div>
  );
}

export default App;
