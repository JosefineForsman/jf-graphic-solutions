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
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    return(
        <main>
            <Header/>
            <Breadcrumbs selectedCategory={selectedCategory} />
            <h1>Portfolio</h1>
            <section>  
            <button
            className={`portfolio__button ${selectedCategory === 'drone' ? 'active' : ''}`}
            onClick={() => setSelectedCategory("drone")}
            >
            drone
            </button>
            <button
            className={`portfolio__button ${selectedCategory === 'product' ? 'active' : ''}`}
            onClick={() => setSelectedCategory("product")}
            >
            product
            </button>
            <button
            className={`portfolio__button ${selectedCategory === 'company' ? 'active' : ''}`}
            onClick={() => setSelectedCategory("company")}
            >
            company
            </button>
            <button
            className={`portfolio__button ${selectedCategory === 'nature' ? 'active' : ''}`}
            onClick={() => setSelectedCategory("nature")}
            >
            nature
            </button>
            <button
            className={`portfolio__button ${selectedCategory === 'commercial' ? 'active' : ''}`}
            onClick={() => setSelectedCategory("commercial")}
            >
            commercial
            </button>
            </section>
            <section>
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