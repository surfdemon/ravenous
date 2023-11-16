import React, {useState} from 'react';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

function App() {
  const [ Businesses, setBusinesses ] = useState([]);
  
  return (
    <div className="App">
      <SearchBar setBusinesses={setBusinesses}/>
      <BusinessList businesses={Businesses}/>
    </div>
  );
}

export default App;