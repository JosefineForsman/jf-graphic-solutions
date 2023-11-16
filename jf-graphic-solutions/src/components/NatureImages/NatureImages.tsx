import './NatureImages.css'
import nature1 from '../../assets/nature1.jpg'
import nature2 from '../../assets/nature2.jpg'
import nature3 from '../../assets/nature3.jpg'
import nature4 from '../../assets/nature4.jpg'
import nature5 from '../../assets/nature5.jpg'
import nature6 from '../../assets/nature6.jpg'

function NatureImages(){

    return(   
    <section className='product-images'>
    <h1>Nature images</h1>
    <article className='image-grid'>
        <img src={nature1} alt="Hand wearing a stylish bracelet against a maritime backdrop with boat ropes." />
        <img src={nature2} alt="Three bracelets resting on ropes on a boat deck, a maritime and elegant product image." />
        <img src={nature3} alt="Close-up of a man's hand wearing a stylish bracelet, holding a scarf." />      
        <img src={nature4} alt="Right-front view of a Mercedes against a black background with cement walls, showcasing sleek design." />
        <img src={nature5} alt="Straight-on product image of a Mercedes car, centered and framed by a black background and cement walls." />
        <img src={nature6} alt="" /> 
    </article>
</section>

    )
}
export default NatureImages