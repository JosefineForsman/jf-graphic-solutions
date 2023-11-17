import './DroneImages.css'
import drone1 from '../../assets/drone1.jpg'
import drone2 from '../../assets/drone2.jpg'
import drone3 from '../../assets/drone3.jpg'
import drone4 from '../../assets/drone4.jpg'
import drone5 from '../../assets/drone5.jpg'
import drone6 from '../../assets/drone6.jpg'

function DroneImages(){

    return(
        <section className='drone-images'>
            <h1 className='portfolio__title'>Drone images</h1>
            <article className='image-grid'>
                <img src={drone1} alt="Drone view of a picturesque estate with stone facade, capturing a lively crowd gathered for a wedding celebration." />
                <img src={drone2} alt="Drone perspective capturing an aerial view of a building's architecture and surroundings, emphasizing the scenic details from an elevated position." />
                <img src={drone3} alt="Aerial view captured directly above the building, highlighting the architectural details and layout from an elevated perspective." />
                <img src={drone4} alt="Aerial view from a drone capturing Pater Noster Lighthouse and the entire island, offering a different perspective with a comprehensive view of the surroundings." />
                <img src={drone5} alt="Aerial view from a drone capturing Rudbjerg Knude Fyr, the white lighthouse surrounded by sand and sea." />
                <img src={drone6} alt="Aerial view from a drone capturing Pater Noster Lighthouse and the entire island, showcasing the unique perspective and surroundings from a different angle." />    
            </article>
        </section>
    )
}
export default DroneImages;