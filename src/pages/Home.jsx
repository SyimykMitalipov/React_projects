import React from 'react';
import Layout from '../components/Layout';
import { collection, addDoc, getDocs, QuerySnapshot } from 'firebase/firestore';
import fireDB from '../fireConfig';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Home = () => {
  const [products, setProducts] = useState([]);
  const cartItems =  useSelector(state => state.cartItems)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function adddata() {
    try {
      await addDoc(collection(fireDB, 'users'), { name: 'Alia', age: 22 });
    } catch (e) {
      console.log(e);
    }
  }
  async function getData() {
    try {
      const product = await getDocs(collection(fireDB, 'products'));
      const productsArray = [];

      product.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        productsArray.push(obj);
      });
      console.log(productsArray);
      setProducts(productsArray);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  },[cartItems])
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    // console.log(product, 'addd productttttt')
    
  };
  

  useEffect(() => {
    getData();
    console.log('hio');
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          {/* <button onClick={() => getData()}></button> */}
          {products?.map((product) => {
            // console.log(product, 'product products');
            return (
              <div className="col-md-4" key={product?.id}>
                <div className="m-2 p-1 product position-relative">
                  <div className="product-content">
                    <p>{product?.name}</p>
                    <div className="text-center">
                      <img src={product.imageUrl} alt="" className="product-img" />
                    </div>
                  </div>
                  <div className="product-actions">
                    <h2>{product?.price} $/-</h2>
                    <div className="d-flex">
                      <button className="mx-2" onClick={() => addToCart(product)}>
                        ADD TO CART
                      </button>
                      <button
                        onClick={() => {
                          navigate(`/productinfo/${product?.id}`);
                        }}>
                        VIEW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
  // }
};
export default Home;
