import { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Rating({ productId, setRating, products }) {

  const [product, setProduct] = useState(null);
  // Letar efter vilken produkt som det gäller från productId.
  useEffect(() => {
    const foundProduct = products.find((product) => product.id === productId);
    setProduct(foundProduct);
  }, [productId, products]);

  const [hoveredStar, setHoveredStar] = useState(null);
  const filledStars = Math.round(product?.rating ? product.rating : 5);
  // Om man trycker på en stjärna, ändra betyget.
  const handleStarClick = (index) => {
    setRating(productId, index + 1);
  }

  return (
    <div>
      {Array(5).fill().map((_, index) => {
        const isFilled = index < filledStars;
        const isHovered = index < hoveredStar;
        return (
          <span
            key={index}
            onMouseEnter={() => setHoveredStar(index + 1)}
            onMouseLeave={() => setHoveredStar(null)}
            onClick={() => handleStarClick(index + 1)}
          >
            {isFilled || isHovered ? <StarIcon /> : <StarBorderIcon />}
          </span>
        )
      })}
    </div>
  );
}

export default Rating;
