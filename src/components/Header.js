import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Header() {

  const [searchString, setSearchString] = useState(null);
  const [results, setResults] = useState([]);

  const products = [
    { title: 'T-shirt', description: 'En t-shirt' },
    { title: 'Jacka', description: 'En jacka' },
  ];

  const handleProductClick = (product) => {
    console.log('Selected product:', product);
    // Här kan du lägga till din egen funktion som hanterar det valda objektet.
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

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Min Header
        </Typography>
        <Box sx={{ position: "relative" }}>
          <TextField sx={{ backgroundColor: "#FFFFFF", position: "relative", width: "400px" }} onChange={(e) => productMatch(e.target.value)} />
          {results.length > 0 &&
            <Box sx={{ position: "absolute", top: 70, left: 0, zIndex: 1, backgroundColor: "#717171", width: "100%", boxSizing: "border-box" }}>
              {results?.length > 0 && results.map((result, index) => {
                return <li key={index}>{result.title}</li>
              })}
            </Box>
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
