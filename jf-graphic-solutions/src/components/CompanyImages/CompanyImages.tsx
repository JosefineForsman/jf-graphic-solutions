import './CompanyImages.css'
import company1 from '../../assets/company1.jpg';
import company2 from '../../assets/company2.jpg';
import company3 from '../../assets/company3.jpg';
import company4 from '../../assets/company4.jpg';
import company5 from '../../assets/company5.jpg';
import company6 from '../../assets/company6.jpg'

function CompanyImages(){

    return(
        <section className='company-images'>
        <h1>Company images</h1>
        <article className='image-grid'>
            <img src={company1} alt="Hand wearing a stylish bracelet against a maritime backdrop with boat ropes." />
            <img src={company2} alt="Three bracelets resting on ropes on a boat deck, a maritime and elegant product image." />
            <img src={company3} alt="Close-up of a man's hand wearing a stylish bracelet, holding a scarf." />      
            <img src={company4} alt="Three bracelets resting on ropes on a boat deck, a maritime and elegant product image." />
            <img src={company6} alt="Close-up of a man's hand wearing a stylish bracelet, holding a scarf." />   
            <img src={company5} alt="Close-up of a man's hand wearing a stylish bracelet, holding a scarf." />  
        </article>
    </section>
    )
}
export default CompanyImages;