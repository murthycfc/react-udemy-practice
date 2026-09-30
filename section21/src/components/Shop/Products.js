import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id:1, title:'java', price:1000,description:'A good book'
  },
  {
    id:2, title:'SB', price:2000,description:'A good book'
  },
  {
    id:3, title:'REACT', price:500,description:'A good book'
  },
  {
    id:4, title:'HTML', price:7000,description:'A good book'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { DUMMY_PRODUCTS.map((product) => (
          <ProductItem
          key = {product.id}
          id= {product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
