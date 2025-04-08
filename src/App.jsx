import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Home from './pages/home/home';
import Transactions from './pages/transcations/transactions';
import Auth from './pages/auth/auth';
import Header from './components/header/header';
import Footer from './components/footer/footer';
  
function App() {
    return (
        <Router>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/transactions/withdraw" element={<Transactions/>} />
                    <Route path="/transactions/deposit" element={<Transactions/>} />
                    <Route path="/login" element={<Auth/>} />
                    <Route path="/register" element={<Auth/>} />
                </Routes>
            </main>
            <Footer/>
        </Router>
    );
}


export default App