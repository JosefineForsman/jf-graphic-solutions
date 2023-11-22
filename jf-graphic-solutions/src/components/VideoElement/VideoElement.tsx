import './VideoElement.css';

function VideoElement(){

    return(
        <section className='video-element'>
            <article className='video-container'>
                <hr  className='home__info-hr'/>
                <p className='video-element__text'>This video features a satisfied customer of Samster AB, sharing their positive experience in choosing solar panels from this reputable company. Discover the journey of a happy customer who opted for sustainable solutions provided by Samster AB</p>
                <hr  className='home__info-hr '/>
            </article>
            <video controls>
                <source src='/movie.mp4' type="video/mp4" />
                <track kind="captions" src='/subtitles.vtt' srcLang='sv' label='Swedish' />
                <track kind="captions" src='/subtitles_en.vtt' srcLang='en' label='English' />
                    Your browser does not support the video tag.
            </video>

        </section>

    )
}
export default VideoElement;