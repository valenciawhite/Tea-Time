import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import TeaPage from './TeaPage';
import Nav from './Nav';
import TeaReviewForm from './TeaReviewForm';
import About from './About';
import Home from './Home'

function App() {
//   const [teas, setTeas] = useState([])
//   const baseUrl = 'http://localhost:3000/teas'

// useEffect(fetchTeas, []);

//   function fetchTeas(){
//     fetch(baseUrl)
//     .then(res => res.json())
//     .then(data => setTeas(data))
//   }
//   console.log(teas)

  return (
    <Router>
    <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/tea-shop" component={TeaPage} />
          <Route path="/comment" component={TeaReviewForm} />
      </Switch>
      {/* <TeaPage /> */}
    </div>

  </Router>
  );
}
export default App;