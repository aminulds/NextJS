import { useRouter } from 'next/router';

function Review() {
  const { productId, reviewId } = useRouter().query;

  return (
    <div>
      <h1>
        Product {productId} Review {reviewId}
      </h1>
    </div>
  );
}

export default Review;
