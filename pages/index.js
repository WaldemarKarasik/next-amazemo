import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import Link from "next/link";
import { wrapper } from "../store/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Home({ data }) {
  const router = useRouter();
  const products = [...data];
  const dispatch = useDispatch();
  // const products = useSelector((state) =>
  //   state.productsList.server
  //     ? state.productsList.server.fromClient
  //       ? state.productsList.server.fromClient.products
  //       : []
  //     : []
  // );
  useEffect(() => {
    dispatch({ type: "CLIENT_PRODUCTS_LOADED", payload: products });
  }, []);
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <main className="main">
      <div className="content">
        <ul className="products">
          {products.length
            ? products.map((product) => (
                <li key={product._id}>
                  <div className="product">
                    <img
                      onClick={() =>
                        router.push(
                          "/products/[id]",
                          `/products/${product._id}`
                        )
                      }
                      className="product-image"
                      src="https://i1.wp.com/www.winkaryo.com/wp-content/uploads/2019/06/8505-drusq5.jpg?fit=800%2C800&ssl=1"
                      alt="product"
                    />
                    <div className="product-name">
                      <Link
                        href="/products/[id]"
                        as={`/products/${product._id}`}
                      >
                        <a>{product.name}</a>
                      </Link>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">{product.price}&#8381;</div>
                    <div className="product-rating">
                      {product.rating} Stars ({product.numReviews})
                    </div>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
    </main>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store, req, res }) => {
//     const { data } = await Axios.get("http://localhost:3000/api/products");
//     store.dispatch({ type: "SERVER_PRODUCTS_LOADED", payload: data });
//   }
// );

export async function getServerSideProps({ req, res }) {
  const { data } = await Axios.get("http://localhost:3000/custom-api/products");
  return { props: { data } };
}

export default Home;
