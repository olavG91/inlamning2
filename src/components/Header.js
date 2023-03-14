import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Header({ handleShowDialog, searchResults, products }) {

  const [searchString, setSearchString] = useState(null);
  const [results, setResults] = useState([]);
  const [showResultList, setShowResultList] = useState(false);
  // Kör handleShowDialog i parent komponent för att visa en produkt.
  const handleProductClick = (product) => {
    handleShowDialog(product);
    setShowResultList(false);
  };
  // Kolla om en söksträng hittas i arrayen med produkter.
  const productMatch = (search) => {
    setSearchString(search);
    if (search.length > 2) {
      const result = products.filter((product) =>
        product.title.toLowerCase().includes(search.toString().toLowerCase())
      );
      setResults(result);
    } else {
      setResults([]);
    }
  }
  // Visa sökresultaten.
  const showResults = () => {
    searchResults(results);
    setShowResultList(false);
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "#414141" }}>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          The Magic Store
        </Typography>
        <Box sx={{ position: "relative" }}>
          <TextField sx={{ backgroundColor: "#FFFFFF", position: "relative", width: "400px" }} onChange={(e) => productMatch(e.target.value)} onFocus={() => setShowResultList(true)} />
          {showResultList && results.length > 0 &&
            <Box sx={{ position: "absolute", top: 70, left: 0, zIndex: 1, backgroundColor: "#414141", width: "100%", boxSizing: "border-box" }}>
              {results?.length > 0 && results.sort((a, b) => b.popularity - a.popularity).slice(0, 3).map((result, index) => {
                return <li key={index} onClick={() => handleProductClick(result.id)}>
                  <div class="searchDropdown">
                    <div>
                      <img src={result.image} alt=""></img>
                    </div>
                    <div className="dropdownProduct">
                      <div className="dropdownHeader">
                        <span>{result.title}</span>
                        <span>{result.price} kr</span>
                      </div>
                      <div>
                        <span>Rating: {result.rating}</span>
                      </div>
                    </div>
                  </div></li>
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
