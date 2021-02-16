import './App.css';
import ShopState from './components/context/ShopContext/ShopState';
import Shop from './components/Shop/Shop';
import Navbar from './components/layout/navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Item from './components/Item/Item';
import ItemState from './components/context/ItemContext/ItemState';
import Set from './components/Set/Set'
import SetState from './components/context/SetContext/SetState'
import Stats from './components/Stats/Stats'
import StatsState from './components/context/Stats Context/StatsState'
import NewsState from './components/context/NewsContext/NewsState'
import News from './components/News/News'
import PlayerStats from './components/Stats/Stat/PlayerStats';
import SearchState from './components/context/SearchContext/SearchState'
import Search from './components/Search/Search';

const App = () => {
  return (
    <ShopState>
      <ItemState>
        <SetState>
          <StatsState>
            <NewsState>
              <SearchState>
                <Router>
                  <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path='/shop' component={Shop} />
                        <Route exact path='/items/:itemtype/:itemname' component={Item} />
                        <Route exact path='/sets/:setname' component={Set} />
                        <Route exact path='/stats' component={Stats} />
                        <Route exact path='/news' component={News} />
                        <Route exact path='/stats/:platform/:username' component={PlayerStats} />
                        <Route exact path='/search' component={Search} />
                    </Switch>
                  </div>
                </Router>
              </SearchState>
            </NewsState>
          </StatsState>
        </SetState>
      </ItemState>
    </ShopState>
  );
}

export default App;
