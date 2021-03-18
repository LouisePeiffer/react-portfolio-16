import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Browser, Route, Switch, } from 'react-router-dom'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Galerie from './pages/Galerie'


export default function App() {
  return (
    <Browser>
      <Switch>
        <Route path='/' exact component={About}/>
        <Route path='/Skills' exact component={Skills}/>
        <Route path='/Contact' exact component={Contact}/>
        <Route path='/Galerie' exact component={Galerie}/>
      </Switch>
    </Browser>
  )
}