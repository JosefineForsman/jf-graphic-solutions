import './ProductImages.css'
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'

function ProductImages(){

    return(   
    <section className='product-images'>
    <h1>Drone images</h1>
    <article className='image-grid'>
        <img src={product1} alt="" />
        <img src={product2} alt="" />
        <img src={product3} alt="" />      
    </article>
</section>

    )
}
export default ProductImages