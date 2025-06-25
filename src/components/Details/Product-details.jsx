export default function ProductDetails({ product }) {
  console.log(product);
  return (
    <section className="product__details">  
      <h2>{product.name}</h2>
      <h3>(Digital Output)</h3>
      <p>{product.description}</p>
      <p>
        G2.1 is the next logical evolutionary step, resulting from a desire to improve upon the original G2 series. At AURALiC, we always work to create a new approach to digital music that pushes the boundaries of sonic quality. Incorporating state-of-the-art technologies and delivered with innovative features, G2.1 is built for ultimate levels of sonic performance
      </p>
      <p>
        Every G2.1 series component, including the ARIES G2.1, sports an all-new industrial design that’s engineered to set a new standard for sound quality, enhance the user experience, and look every bit as good as it sounds with its contemporary aesthetic. Offering features like a copper enclosure, a high-mass base, and an enhanced suspension system optimizes the sound of the ARIES G2.1 and ensures it is the most capable and feature-rich way to introduce streaming to your audio system that we’ve ever created.
      </p>

      <div className="radio__group">
        <div>
          <input type="radio" id="radio1" name="radioBtn" className="radio__black" />
          <label htmlFor="radio1">Black</label>
        </div>
        <div>
          <input type="radio" id="radio2" name="radioBtn" className="radio__silver" />
          <label htmlFor="radio2">Silver</label>
        </div>
        <div>
          <input type="radio" id="radio3" name="radioBtn" className="radio__gold" />
          <label htmlFor="radio3">Gold</label>
        </div>
      </div>
      <div className="product__price">
        <span className="price">{product.price}</span>
        <span className="instock">In stock <div className="instock__dot"></div></span>
      </div>

      <div className="product__btns">
        <div className="counter">
  <button className="decrement">−</button>
  <span className="value">1</span>
  <button className="increment">+</button>
</div>

        <button className="cartBtn button">Add to Cart</button>
    </div>
    </section>
  );
}
