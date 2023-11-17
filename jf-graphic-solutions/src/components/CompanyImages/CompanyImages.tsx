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
        <h1 className='portfolio__title'>Company images</h1>
        <article className='image-grid'>
            <img src={company1} alt="A captain in white captain's uniform standing in the wheelhouse, overseeing operations on the boat" />
            <img src={company2} alt="An orange life boat suspended in the air above the sea, captured from the boat's perspective looking down towards the water" />
            <img src={company3} alt="Two workers in action aboard an orange lifeboat suspended above the sea, as seen from above the boat's hatch." />      
            <img src={company4} alt="A businesswoman with brown hair and professional attire smiling in an office setting with a conference room in the background." />
            <img src={company6} alt="A group of people in a lounge setting, laughing and discussing business matters in a relaxed environment." />   
            <img src={company5} alt="Two men sitting at separate tables, each with a laptop, focused on their work in a side view perspective." />  
        </article>
    </section>
    )
}
export default CompanyImages;