import shoe1 from "../assets/shoes1.png";
import shoe2 from "../assets/shoes2.png";
import shoe3 from "../assets/shoes3.png";
import shoe4 from "../assets/shoes4.png";

function ProductCard() {
  return (
    <section className="shoe-store">

      <h2>Our Shoe Store</h2>

      <div className="store-shelf">
        <div className="shoe">
          <img src={shoe1} alt="Brown shoe" />
          <h3>Brown Formal Shoe</h3>
          <p>40,000 RWF</p>
          <button>Add to Cart</button>
        </div>

        <div className="shoe">
          <img src={shoe2} alt="Jordan shoe" />
          <h3>Jordan Shoes</h3>
          <p>60,000 RWF</p>
          <button>Add to Cart</button>
        </div>

        <div className="shoe">
          <img src={shoe3} alt="Sport shoe" />
          <h3>Sport Shoes</h3>
          <p>50,000 RWF</p>
          <button>Add to Cart</button>
        </div>

        <div className="shoe">
          <img src={shoe4} alt="Nike shoe" />
          <h3>Nike Shoes</h3>
          <p>45,000 RWF</p>
          <button>Add to Cart</button>
        </div>
      </div>

    </section>
  );
}

export default ProductCard;