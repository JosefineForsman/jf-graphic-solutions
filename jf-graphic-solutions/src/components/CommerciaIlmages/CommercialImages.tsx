import commercial1 from '../../assets/commercial1.jpg';
import commercial2 from '../../assets/commercial2.jpg';
import commercial3 from '../../assets/commercial3.jpg';
import commercial4 from '../../assets/commercial4.jpg';
import commercial5 from '../../assets/commercial5.jpg';
import commercial6 from '../../assets/commercial6.jpg'

function CommercialImages(){

    return(
        <section className='company-images'>
        <h1 className='portfolio__title'>Commercial images</h1>
        <article className='image-grid'>
            <img src={commercial1} alt="Joyful woman in a hotel bed, wearing a towel turban, talking on the phone with a cheerful expression" />
            <img src={commercial2} alt="Dark-haired woman with a serious model-like expression lying on a hotel pillow, seen from a slightly elevated side angle, with her hand visible in front of the pillow" />
            <img src={commercial3} alt="Brunette in black dress poses by a window, creating a beautiful play of light and dark" />      
            <img src={commercial4} alt="Woman posing on stairs in front of a castle, wearing a fluffy pink jacket" />
            <img src={commercial6} alt="Woman joyfully showcasing black dress, bag, and shoes in a fashion product photo, set against warm-toned background buildings" />   
            <img src={commercial5} alt="Woman poses with a white building background, highlighting a black handbag and glasses. Online accessory store advertisement" />  
        </article>
    </section>
    )
}
export default CommercialImages;