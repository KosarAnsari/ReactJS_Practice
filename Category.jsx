import Product from './Product';

function Category({ categoryName, products }) {
  return (
    <>
      <h4>{categoryName}</h4>
      <ul>
        {products.map((product, index) => (
          <Product key={index} name={product} />
        ))}
      </ul>
    </>
  );
}
export default Category;
