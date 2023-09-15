import Product from "../product/Product";
import "./ProductList.css";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Abhishek</h1>
        <p className="pl-desc">
          Abhishek is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-lists">
        { products.map((item)=>(
            <Product key={item.id} img={item.img} link={item.link}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
