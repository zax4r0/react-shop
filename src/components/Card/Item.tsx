import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../app/lib/redux/reducers/cartSlice';

function Item({ image, title, description, product, price }: any) {
  const dispatch = useDispatch();

  const handelAddtoCart = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="group cursor-pointer p-3 truncate mr-2 transition duration-300 ease-in transform sm:hover:scale-105 hover:z-50" />
      <div className=" my-7 mx-10 card  flex flex-col justify-center p-20 bg-white rounded-lg shadow-2xl">
        <img src={image} className="w-full object-cover object-center" />
        <div className="prod-info grid gap-10">
          <p className="text-2xl uppercase text-gray-900 font-bold">{title}</p>
          <p className="uppercase text-sm text-gray-400 truncate">{description}</p>
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
    </>
  );
}
export default Item;
