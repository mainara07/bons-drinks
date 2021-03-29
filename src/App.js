import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home"
import Sobre from "./components/Sobre"
import Drinks from "./components/Drinks"
import Erro404 from "./components/Erro404"
import  {BrowserRouter, Switch, Route} from 'react-router-dom'
import Form from './components/Contato/Form';
import Time from './components/Time/Time';

function App() {
  return (
    <div className="body">
      <BrowserRouter>
      <Header/>
      <Switch>
        
        <Route exact path="/">
          <Home/>
        </Route>
       
        <Route path="/sobre">
          <Sobre/>
        </Route>
        
        <Route path="/contato">
          <Form/>
        </Route>
        
        <Route path="/drinks/*">
          <Drinks/>
        </Route>

        <Route path="/time">
          <Time/>
        </Route>

        <Route path="*">
          <Erro404 />
        </Route>

        
      </Switch>
      <Footer/>
      </BrowserRouter>
  
    </div>
  
  );
}

export default App;
