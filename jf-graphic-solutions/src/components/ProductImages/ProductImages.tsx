import './ProductImages.css'
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import product4 from '../../assets/product4.jpeg'
import product5 from '../../assets/product5.jpeg'
import product6 from '../../assets/product6.jpg'
import { useState, useEffect } from 'react'

function ProductImages() {
    const images = [product1, product2, product3, product4, product5, product6];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    useEffect(() => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = `Image ${currentImageIndex + 1} of ${images.length}`;
      }
    }, [currentImageIndex]);
  
    return (
      <section className='product-images'>
        <h1>Product images</h1>
        <article className='image-grid'>
          <img src={images[currentImageIndex]} alt={`Product ${currentImageIndex + 1}`} />
        </article>
        <button onClick={prevImage} aria-label="Previous Image" role="button">
          Previous
        </button>
        <button onClick={nextImage} aria-label="Next Image" role="button">
          Next
        </button>
        <div id='live-region' aria-live='polite' style={{ position: 'absolute', left: '-9999px' }}></div>
      </section>
    );
  }
  
  export default ProductImages;