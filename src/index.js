import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home/App';
import CadastroVideo from './pages/cadastro/Video/video'
import CadastroCategoria from './pages/cadastro/Categoria/categoria'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
      <Route path="/" component={App} exact/>
      <Route component={()=>(<div>"Pagina 404"</div>)}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
