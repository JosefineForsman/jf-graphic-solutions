import './ProductImages.css'
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import product4 from '../../assets/product4.jpeg'
import product5 from '../../assets/product5.jpeg'
import product6 from '../../assets/product6.jpg'

function ProductImages(){

    return(   
    <section className='product-images'>
    <h1>Product images</h1>
    <article className='image-grid'>
        <img src={product1} alt="Hand wearing a stylish bracelet against a maritime backdrop with boat ropes." />
        <img src={product2} alt="Three bracelets resting on ropes on a boat deck, a maritime and elegant product image." />
        <img src={product3} alt="Close-up of a man's hand wearing a stylish bracelet, holding a scarf." />      
        <img src={product4} alt="Right-front view of a Mercedes against a black background with cement walls, showcasing sleek design." />
        <img src={product5} alt="Straight-on product image of a Mercedes car, centered and framed by a black background and cement walls." />
        <img src={product6} alt="" /> 
    </article>
</section>

    )
}
export default ProductImages