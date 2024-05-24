import React, {useContext, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {observer} from "mobx-react-lite";
import Shop from "./pages/Shop";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <AppRouter/>
    <Footer/>
    </BrowserRouter>
  );
}

export default observer(App);
