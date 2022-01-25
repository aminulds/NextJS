import Link from 'next/link';

function ProductList({ productId = 100 }) {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
      </div>
      <h1>
        <Link href={`/products/1`}>Product 1</Link>
      </h1>
      <h1>
        <Link href={`/products/2`}>Product 2</Link>
      </h1>
      <h1>
        <Link href={`/products/${productId}`}>Product 3</Link>
      </h1>
    </div>
  );
}

export default ProductList;
