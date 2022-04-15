import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const Cartpage = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch()
  const deleteFromCart = (product) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: product });
    console.log(product, 'delete productttttt')
    
  };
  useEffect(() => {
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  },[cartItems])
  console.log(cartItems)
  return (
    <Layout>
      <table className='table mt-3 '>
        <thead>
            <tr>
                <th>Image</th> 
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>


            </tr>
        </thead>
        <tbody>

            { 
                cartItems.map(product => {
                    return <tr>
                        <td><img src={product.imageUrl} height='80' width='80' alt="" /></td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td> <FaTrash className='delete' onClick={() => deleteFromCart()} /> </td>

                    </tr>
                })
            }
        </tbody>
      </table>
    </Layout>
  );
};

export default Cartpage;
