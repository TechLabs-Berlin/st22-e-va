import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {
  axios({
    method: 'GET',
    url: `localhost:8080/`,
  }).then(value => {
    console.log('wow')
    console.log(value)
  })
  return (
    <div className="App">
      Hello world!!
    </div>
  );
}

export default App;
