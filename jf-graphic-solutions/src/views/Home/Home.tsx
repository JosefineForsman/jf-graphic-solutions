import './Home.css';
import Header from '../../components/Header/Header';
function Home(){
    return (
        <div>
          <header>
            <Header/>
          </header>
    
          <main>
            <section>
              <h2>Våra Tjänster</h2>
              <p>Här är en lista över tjänster som vi erbjuder:</p>
              <ul>
                <li>Drönarfotografering</li>
                <li>Bildredigering</li>
                <li>Retuschering</li>
                <li>Grafisk design</li>
                <li>Fotografering</li>
                <li>Videoproduktion</li>
              </ul>
            </section>
          </main>
        </div>
      );
}
export default Home;