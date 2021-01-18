import './App.css';
import ShopState from './components/context/ShopContext/ShopState';
import Shop from './components/Shop/Shop';
import Navbar from './components/layout/navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Item from './components/Item/Item';

const App = () => {
  return (
    <ShopState>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Shop} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/shop/item/:itemid' render={(props) => (
              <>
              <Item {...props} />
              </>
            )}/>
          </Switch>
        </div>
      </Router>
    </ShopState>
  );
}

export default App;
