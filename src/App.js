import './App.css';
import ShopState from './components/context/ShopContext/ShopState';
import Shop from './components/Shop/Shop';
import Navbar from './components/layout/navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Item from './components/Item/Item';
import ItemState from './components/context/ItemContext/ItemState';

const App = () => {
  return (
    <ShopState>
      <ItemState>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Shop} />
              <Route exact path='/shop' component={Shop} />
              
                <Route exact path='/:itemtype/:itemname' component={Item} />
            </Switch>
          </div>
        </Router>
      </ItemState>
    </ShopState>
  );
}

export default App;
