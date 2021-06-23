// import logo from './logo.svg';
import './App.css';
// import Homes from './components/Homes/Homes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import Team from './Pages/Team';
import Home from './Pages/Home';
import Token_sale from './Pages/Token_sale';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import Road_map from './Pages/Road_map';

function App() {
  return (
    <Router
      basename="#"
    >
      {/* <Header /> */}
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={Team} />
          <Route path="/" exact component={Token_sale} />
          <Route path="/" exact component={About} />
          <Route path="/" exact component={Contact} />
          <Route path="/" exact component={Faq} />
          <Route path="/" exact component={Road_map} />
          {/* <Route path='/404' component={NotFound} />
          <Route path="*" component={NotFound} status={404} /> */}
        </Switch>
      </ScrollToTop>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
