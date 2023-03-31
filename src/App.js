import React from 'react';

import s from './App.module.css';
import { HeaderContainer } from './components/Header';
import { Footer } from './components/Footer';
import { ItemContainer } from './components/Items';
import { Filter } from './components/Filter';



export default function App() {
  return (
    <div className={s.app}>

      <HeaderContainer />
      <Filter />
      <ItemContainer />
      <Footer />

    </div>
  )
}
