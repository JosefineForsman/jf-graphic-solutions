import './CommercialImages.css'
import commercial1 from '../../assets/commercial1.jpg';
import commercial2 from '../../assets/commercial2.jpg';
import commercial3 from '../../assets/commercial3.jpg';
import commercial4 from '../../assets/commercial4.jpg';
import commercial5 from '../../assets/commercial5.jpg';
import commercial6 from '../../assets/commercial6.jpg'

function CommercialImages(){

    return(
        <section className='company-images'>
        <h1>Commercial images</h1>
        <article className='image-grid'>
            <img src={commercial1} alt="Hand wearing a stylish bracelet against a maritime backdrop with boat ropes." />
            <img src={commercial2} alt="Three bracelets resting on ropes on a boat deck, a maritime and elegant product image." />
            <img src={commercial3} alt="Close-up of a man's hand wearing a stylish bracelet, holding a scarf." />      
            <img src={commercial4} alt="Three bracelets resting on ropes on a boat deck, a maritime and elegant product image." />
            <img src={commercial6} alt="Close-up of a man's hand wearing a stylish bracelet, holding a scarf." />   
            <img src={commercial5} alt="Close-up of a man's hand wearing a stylish bracelet, holding a scarf." />  
        </article>
    </section>
    )
}
export default CommercialImages;