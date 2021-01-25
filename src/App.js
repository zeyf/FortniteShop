import './App.css';
import ShopState from './components/context/ShopContext/ShopState';
import Shop from './components/Shop/Shop';
import Navbar from './components/layout/navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Item from './components/Item/Item';
import ItemState from './components/context/ItemContext/ItemState';
import Set from './components/Set/Set'
import SetState from './components/context/SetContext/SetState'

const App = () => {
  return (
    <ShopState>
      <ItemState>
      <SetState>
          <Router>
            <div className="App">
              <Navbar />
              <Switch>
                  <Route exact path='/' component={Shop} />
                  <Route exact path='/shop' component={Shop} />
                  <Route exact path='/items/:itemtype/:itemname' component={Item} />
                  <Route exact path='/sets/:setname' component={Set} />
              </Switch>
            </div>
          </Router>
        </SetState>
      </ItemState>
    </ShopState>
  );
}

export default App;
