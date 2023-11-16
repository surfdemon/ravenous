import React, {useState} from 'react';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

function App() {
  const [ Businesses, setBusinesses ] = useState([]);
  
  
//   const Businessesv1 = [
//     {
//         name: 'Chinise Shop',
//         address: '23 Chinese Street, Fried Rice Bay',
//         category: 'Chinese',
//         rating: 5, 
//         reviewCount: 10,
//         imgSrc: 'https://placehold.co/200x200/png',
//         imgAlt: ''
//     },
//     {
//         name: 'Italian Pizza Mayhem',
//         address: '123 Cheesy Street',
//         category: 'Italian',
//         rating: 2, 
//         reviewCount: 4,
//         imgSrc: 'https://placehold.co/200x200/png',
//         imgAlt: ''
//     }
// ]

  return (
    <div className="App">
      <SearchBar setBusinesses={setBusinesses}/>
      <BusinessList businesses={Businesses}/>
    </div>
  );
}

export default App;
