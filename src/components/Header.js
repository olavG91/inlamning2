import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Header({ selectProduct, searchResults }) {

  const [searchString, setSearchString] = useState(null);
  const [results, setResults] = useState([]);

  const products = [
    { image: 'https://picsum.photos/200', title: 'T-shirt', description: 'En t-shirt', price: 200, rating: 4 },
    { image: 'https://picsum.photos/200', title: 'Jacka', description: 'En jacka', price: 100, rating: 2 },
  ];

  const handleProductClick = (product) => {
    selectProduct(product);
    console.log('Selected product:', product);
  };

  const productMatch = (search) => {
    setSearchString(search);
    if (search.length > 2) {
      const result = products.filter((product) =>
        product.title.toLowerCase().includes(search.toString().toLowerCase())
      );
      setResults(result);
      console.log(results);
    } else {
      setResults([]);
    }
  }

  const showResults = () => {
    searchResults(results);
    console.log("Sökresultat");
    console.log(results);
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "#414141" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Min Header
        </Typography>
        <Box sx={{ position: "relative" }}>
          <TextField sx={{ backgroundColor: "#FFFFFF", position: "relative", width: "400px" }} onChange={(e) => productMatch(e.target.value)} />
          {results.length > 0 &&
            <Box sx={{ position: "absolute", top: 70, left: 0, zIndex: 1, backgroundColor: "#717171", width: "100%", boxSizing: "border-box" }}>
              {results?.length > 0 && results.map((result, index) => {
                return <li key={index} onClick={() => handleProductClick(result)}>{result.title}</li>
              })}
            </Box>
          }
        </Box>
        <Button variant="contained" sx={{ ml: 2 }} onClick={showResults}>Sök</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
