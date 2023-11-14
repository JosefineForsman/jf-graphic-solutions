import './VideoElement.css';
import movie from '../../assets/4e4fb55a-cdf3-4b76-a467-167584da1b20.mp4'

function VideoElement(){

    return(
        <section className='video-element'>
            <p className='video-element__text'>This video features a satisfied customer of Samster AB, sharing their positive experience in choosing solar panels from this reputable company. Discover the journey of a happy customer who opted for sustainable solutions provided by Samster AB</p>
            <video controls>
                <source src={movie} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
        </section>

    )
}
export default VideoElement;