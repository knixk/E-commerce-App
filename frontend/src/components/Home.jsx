import MetaData from "./layout/MetaData";
import { useGetProductsQuery } from "../redux/api/productsApi";
import ProductItem from "./product/ProductItem";
import { useEffect } from "react";
import Loader from "./layout/Loader";
import toast from "react-hot-toast";

function Home() {
  const { data, isLoading, error, isError } = useGetProductsQuery();

  if (data) console.log(data);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError]);

  if (isLoading) return <Loader></Loader>;

  return (
    <>
      <MetaData title={"Best products online at cheapest prices!"} />

      <div className="row">
        <div className="col-12 col-sm-6 col-md-12">
          <h1 id="products_heading" className="text-secondary">
            Latest Products
          </h1>

          <section id="products" className="mt-5">
            <div className="row">
              {data?.products?.map((product) => (
                <ProductItem product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
