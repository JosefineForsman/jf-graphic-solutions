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
            <h1>Drone images</h1>
            <article className='image-grid'>
                <img src={drone1} alt="" />
                <img src={drone2} alt="" />
                <img src={drone3} alt="" />
                <img src={drone4} alt="" />
                <img src={drone5} alt="" />
                <img src={drone6} alt="" />
                
            </article>

        </section>
    )
}
export default DroneImages;