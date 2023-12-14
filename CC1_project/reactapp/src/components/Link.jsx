import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App1 = () => <h2>App 1</h2>;

function App() {
 return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/reactapp2">App 1</Link>
            </li>
            
          </ul>
        </nav>

        <Route path="/app1" component={App1} />
      </div>
    </Router>
 );
}

export default App;