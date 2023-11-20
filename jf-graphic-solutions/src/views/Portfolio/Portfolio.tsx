import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import DroneImages from "../../components/DroneImages/DroneImages";
import ProductImages from "../../components/ProductImages/ProductImages";
import CompanyImages from "../../components/CompanyImages/CompanyImages";
import CommercialImages from "../../components/CommerciaIlmages/CommercialImages";
import NatureImages from "../../components/NatureImages/NatureImages";
import './Portfolio.css'
function Portfolio(){
    const [selectedCategory, setSelectedCategory] = useState<string>('drone');
    return(
        <main className="portfolio">
            <Header/>
            <h1 className="portfolio__title" aria-label="Portfolio Main Title">Portfolio</h1>
            <Breadcrumbs selectedCategory={selectedCategory} />
            <h2 className="portfolio__subtitle">Explore our portfolio by selecting a category below to see more images.</h2>
            <section className="portfolio__container">  
            <button
                aria-label='show portfolio with drone images'
                className={`portfolio__button ${selectedCategory === 'drone' ? 'active' : ''}`}
                onClick={() => setSelectedCategory("drone")}
            >
            drone
            </button>
            <button
                aria-label='show portfolio with product images'
                className={`portfolio__button ${selectedCategory === 'product' ? 'active' : ''}`}
                onClick={() => setSelectedCategory("product")}
            >
            product
            </button>
            <button
                aria-label='show portfolio with company images'
                className={`portfolio__button ${selectedCategory === 'company' ? 'active' : ''}`}
                onClick={() => setSelectedCategory("company")}
            >
            company
            </button>
            <button
                aria-label='show portfolio with nature images'
                className={`portfolio__button ${selectedCategory === 'nature' ? 'active' : ''}`}
                onClick={() => setSelectedCategory("nature")}
            >
            nature
            </button>
            <button
                aria-label='show portfolio with commercial images'
                className={`portfolio__button ${selectedCategory === 'commercial' ? 'active' : ''}`}
                onClick={() => setSelectedCategory("commercial")}
            >
            commercial
            </button>
            </section>
            <section aria-live="polite">
                {selectedCategory === "drone" && <DroneImages />}
                {selectedCategory === "product" && <ProductImages />}
                {selectedCategory === "company" && <CompanyImages />}
                {selectedCategory === "nature" && <NatureImages />}
                {selectedCategory === "commercial" && <CommercialImages />}
</section>
            <Footer/>
        </main>

    )
}
export default Portfolio;