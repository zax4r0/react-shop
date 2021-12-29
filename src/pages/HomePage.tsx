import { useGetAllProductsQuery } from '../app/lib/api/fakestore';
import Banner from '../components/Banners/Index';
import Item from '../components/Card/Item';

export const HomePage = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();
  if (isLoading) {
    return <div>LOadingg</div>;
  }
  if (error) {
    return <div>Error{error}</div>;
  }
  return (
    <>
      <Banner />
      <div className="lg:px-10  lg:py-10  my-10 sm:grid md:grid-cols-3 xl:grid-cols-3  3xl:flex flex-wrap justify-center transition-all duration-300 ">
        {data?.map((ite) => (
          <div key={ite.id}>
            {/* <Item name={ite.title} image={ite.image} product={ite}></Item> */}
            <Item image={ite.image} title={ite.title} product={ite} price={ite.price} description={ite.description} />
          </div>
        ))}
      </div>
    </>
  );
};
