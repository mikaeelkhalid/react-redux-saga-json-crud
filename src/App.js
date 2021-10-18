import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEditUser from './pages/AddEditUser';
import About from './pages/About';
import UserInfo from './pages/UserInfo';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/user-info/:id' component={UserInfo} />
          <Route path='/add-user' component={AddEditUser} />
          <Route path='/edit-user/:id' component={AddEditUser} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
