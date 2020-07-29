import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import {BrowserRouter, Switch, router, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


// Desafio master blaster do jooj top
const Pagina404 = () => (<div>Pagina 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route path= "/" component={Home} exact />
      <Route path= "/cadastro/video" component={CadastroVideo} />
      <Route path= "/cadastro/Categoria" component={CadastroCategoria} />
      <Route  component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


