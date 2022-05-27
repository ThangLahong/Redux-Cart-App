import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS = [
  {
    id: 'p1',
    title: 'Book',
    price: 10,
    description: 'Book description'
  },
  {
    id: 'p2',
    title: 'Pen',
    price: 1,
    description: 'Pen description'
  },
  {
    id: 'p3',
    title: 'Ruler',
    price: 2,
    description: 'Ruler description'
  },{
    id: 'p4',
    title: 'Notebook',
    price: 5,
    description: 'Notebook description'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
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
