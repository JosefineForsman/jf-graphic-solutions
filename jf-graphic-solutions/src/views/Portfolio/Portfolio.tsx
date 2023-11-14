import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState } from "react";
import DroneImages from "../../components/DroneImages/DroneImages";
import ProductImages from "../../components/ProductImages/ProductImages";
import CompanyImages from "../../components/CompanyImages/CompanyImages";
import CommercialImages from "../../components/CommerciaIlmages/CommercialImages";
import NatureImages from "../../components/NatureImages/NatureImages";
function Portfolio(){
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    return(
        <main>
            <Header/>
            <h1>Portfolio</h1>
            <section>
                <button onClick={() => setSelectedCategory("drone")}>drone</button>
                <button onClick={() => setSelectedCategory("product")}>product</button>
                <button onClick={() => setSelectedCategory("company")}>company</button>
                <button onClick={() => setSelectedCategory("nature")}>nature</button>
                <button onClick={() => setSelectedCategory("commercial")}>commercial</button>
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