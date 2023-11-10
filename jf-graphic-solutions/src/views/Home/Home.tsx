import './Home.css';
import Header from '../../components/Header/Header';
function Home(){
    return (
        <div>
          <header>
            <Header/>
          </header>
    
          <main>
            <section className='home'>
              <h1 className='text__title'>Welcome to JF Graphic Solutions</h1>
              <h2 className='text'>  Maybe you are considering taking the step into social media with effective ads?</h2>
              <h2 className='text'> JF Grafik Solutions is your trusted partner in photography and video production with customized editing for all your business needs.</h2>
            </section>
            <section className='home__services'>
              <h1 className='text__title'>Our services</h1>
              <ul className='home__services__ul'>
                <li className='home__services__options'>Drone Photography</li>
                <li className='home__services__options'>Image editing</li>
                <li className='home__services__options'>Retouching</li>
                <li className='home__services__options'>Graphic Design</li>
                <li className='home__services__options'>Photographing</li>
                <li className='home__services__options'>Video Production</li>
              </ul>
            </section>
          </main>
        </div>
      );
}
export default Home;