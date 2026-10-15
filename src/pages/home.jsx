import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <h1>Welcome to My Shoes Shop</h1>

        <p>Find your favorite shoes here.</p>

        <button>Shop Now</button>

        <h2>Our Shoes</h2>

        <ProductCard />
      </main>
    </>
  );
}

export default Home;