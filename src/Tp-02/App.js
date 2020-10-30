/**
 * 1- Instalar react-router-dom
 * 2- Incluir Navbar En App.js
 * 3- Colocar Router
 * 4- Convertir las Rutas del NavBar.js en NavLink
 * 5- Basandose en las rutas del Navbar, crear un switch en APP.js que enrute cada ruta con su componente
 * 6- En cada componente, implementar metodo Constructor con SUPER y un estado. Por ejemplo: 
 *    En el constructor de Posts, colocar un estado como: this.state = {posts:[]};
 * 7- En cada componente, implementar componendDidMount.
 * 8- En cada componente, consumir en el lugar correcto un fetch al servicio de jsonplaceholder correspondiente. 
 *    Por ejemplo, en Posts: 
 *    fetch('https://jsonplaceholder.typicode.com/posts')
 * 9- Guardar la respuesta de los servicios en el estado de cada componente.
 * 10- Renderizar correctamente en cada componente los resultados guardados en el estado.
 *    Se puede utilizar: <ul> <ol> <table> o componentes de Bootstrap (Cards, etc.)
 * 
 * ****Extras***
 * 
 * 11- Acomodar el proyecto para que La estructura de carpetas sea como veniamos trabajando
 * 12- Crear un componente llamado "ShowData" que reciba el dato y el formato y decida si renderizar un LI / TR / CARD
 * 13- Guardar en localStorage el dato traido del servicio. Luego, antes de consumir el servicio, consultar si existe el dato en el LOCALSTORAGE. Si existe, no hacer nuevamente el fetch!
 * 
 */

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from './NavBar'
import Home from './Home';
import Albums from './Albums';
import Comments from './Comments';
import Posts from './Posts';
import Todos from './Todos';
import Users from './Users';






function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route path="/albums"><Albums /></Route>
          <Route path="/comments"><Comments /></Route>
          <Route path="/posts"><Posts /></Route>
          <Route path="/todos"><Todos /></Route>
          <Route path="/users"><Users /></Route>
          <Route path="*"><Redirect to="/home"/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
