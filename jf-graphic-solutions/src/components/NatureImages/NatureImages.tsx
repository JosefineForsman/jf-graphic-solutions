import nature1 from '../../assets/nature1.jpg'
import nature2 from '../../assets/nature2.jpg'
import nature3 from '../../assets/nature3.jpg'
import nature4 from '../../assets/nature4.jpg'
import nature5 from '../../assets/nature5.jpg'
import nature6 from '../../assets/nature6.jpg'

function NatureImages(){

    return(   
    <section className='product-images'>
    <h1 className='portfolio__title'>Nature images</h1>
    <article className='image-grid'>
        <img src={nature1} alt="A dramatic and beautiful night view of Tjörn Bridge with flashes of lightning and clouds in the darkened sky" />
        <img src={nature2} alt="An aerial view captured by a drone, overlooking the bridge leading to Marstrand. The image captures the beautiful landscape with water and rocky outcrops guiding the way" />
        <img src={nature3} alt="Drone's perspective capturing Klädesholmen, showcasing the island's iconic red and white houses, the surrounding sea, boats, and harbor scenery" />      
        <img src={nature4} alt="A man stepping out of a car with a stunning view of Norwegian fjords through the car window, captured from a high vantage point" />
        <img src={nature5} alt="An overhead view of a stunning autumn scene, featuring a picturesque meadow blanketed in vibrant hues of fall foliage, surrounding a beautiful inlet of water" />
        <img src={nature6} alt="Red cable car descending through vibrant Norwegian spruce forest, revealing mountain valleys and a distant village from above." /> 
    </article>
</section>

    )
}
export default NatureImages