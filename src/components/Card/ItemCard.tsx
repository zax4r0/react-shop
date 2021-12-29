import { useDispatch } from 'react-redux';
import { addToCart } from '../../app/lib/redux/reducers/cartSlice';

function ItemCard({ image, title, product, price, description }: any) {
  const dispatch = useDispatch();

  const handelAddtoCart = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="container mx-auto max-w-sm w-full p-4 sm:w-1/2">
          <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
            <div className="prod-title">
              <p className="text-2xl uppercase text-gray-900 font-bold">{title}</p>
              <p className="uppercase text-sm text-gray-400 truncate">{description}</p>
            </div>
            <div className="prod-img">
              <img src={image} className="w-full object-cover object-center" />
            </div>
            <div className="prod-info grid gap-10">
              <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                <p className="font-bold text-xl">$ {price}</p>
                <button
                  onClick={() => handelAddtoCart(product)}
                  className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
