import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home"
import  {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="body">
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
      <Footer/>
      </BrowserRouter>
  
    </div>
  
  );
}

export default App;
