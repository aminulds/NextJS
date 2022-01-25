
import { useRouter } from 'next/router';

function ProductDetails() {
  const productId = useRouter().query.productId

  return <h1>Product {productId} Details</h1>
}

export default ProductDetails
