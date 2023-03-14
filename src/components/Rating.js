import { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Rating({ productId, setRating, products }) {

  const [product, setProduct] = useState(null);
  // Letar i products vilken produkt som det gäller från productId.
  useEffect(() => {
    const foundProduct = products.find((product) => product.id === productId);
    setProduct(foundProduct);
  }, [productId, products]);

  const [hoveredStar, setHoveredStar] = useState(null);
  const filledStars = Math.round(product?.rating ? product.rating : 5);
  const emptyStars = 5 - filledStars;
  const filledStarIcons = Array(filledStars).fill(<StarIcon />);
  const emptyStarIcons = Array(emptyStars).fill(<StarBorderIcon />);

  const handleStarClick = (index) => {
    setRating(productId, index + 1);
  }

  return (
    <div>
      {[...filledStarIcons, ...emptyStarIcons].map((icon, index) => {
        const isFilled = index < filledStars;
        return (
          <span
            key={index}
            onMouseEnter={() => setHoveredStar(index)}
            onMouseLeave={() => setHoveredStar(null)}
            onClick={() => handleStarClick(index)}
          >
            {isFilled ? <StarIcon /> : <StarBorderIcon />}
          </span>
        )
      })}
    </div>
  );
}

export default Rating;
