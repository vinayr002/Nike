import PopularProductsCard from "../components/PopularProductsCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5 ">
        <h2 className="text-4xl font-bold font-palanquin ">
          Our <span className="text-coral-red ">popular</span> Products
        </h2>
        <p className="text-slate-gray font-montserrat mt-2 lg:max-w-lg ">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ">
        {products.map((product) => (
          <PopularProductsCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
