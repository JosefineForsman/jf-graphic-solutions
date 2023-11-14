import './VideoElement.css';
import movie from '../../assets/4e4fb55a-cdf3-4b76-a467-167584da1b20.mp4'

function VideoElement(){

    return(
        <section className='video-element'>
            <h2>Commercial Video</h2>
            <video width="640" height="360" controls>
        <source src={movie} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </section>

    )
}
export default VideoElement;