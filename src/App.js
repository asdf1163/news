import logo from './logo.svg';
import './App.css';
const axios = require('axios').default;

function dane()
{
  return axios.get('https://content.guardianapis.com/search?&q=debate&api-key=86069387-0efe-47f5-a62d-bc65c5e9e7db');
  
  /*.then(resp => {

    let prz = '<p>{resp}</p>';
    return prz;
  });*/
}



/*axios.get('https://content.guardianapis.com/search?&q=debate&api-key=86069387-0efe-47f5-a62d-bc65c5e9e7db').then(resp => {

    console.log(resp.data.response.results);
});*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ta</p>
      </header>
    </div>
  );
}

export default App;
