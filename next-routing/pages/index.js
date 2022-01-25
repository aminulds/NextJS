import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  const placeOrder = () => {
    console.log('Order Placed Successfully!');
    router.push('/products');
  };

  return (
    <>
      <Head>
        <title>Codevolution Nextjs Doc Practice</title>
      </Head>

      <div className="bg-dark p-5 text-center text-white">
        <h1>Home Page</h1>
        <Link href="/products">Products</Link>
        <br />
        <Link href="/blog">Blog</Link>

        <div className="">
          <button className="btn btn-success mt-4" onClick={placeOrder}>
            Order Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
