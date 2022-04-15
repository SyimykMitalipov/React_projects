import React from 'react';
import Layout from '../components/Layout';
import { getDoc, doc } from 'firebase/firestore';
import fireDB from '../fireConfig';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Productinfo = () => {
  const [product, setproduct] = useState([]);
  const params = useParams();
  useEffect(() => {
    getData();
    console.log('hio');
  }, []);

  async function getData() {
    try {
      const productTemp = await getDoc(doc(fireDB, 'products', params.productid));

      setproduct(productTemp.data());
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-8 justify-content-center">
          {product && (
          <div>
            <p>
              <b>{product.name}</b>
            </p>
            <img src={product.imageUrl} className="product-info-img" alt="" />
            <hr />
            <p>{product.description}</p>
            <div className="d-flex justify-content-end my-3">
              <button>ADD TO CART</button> 
            </div>
          </div>
        )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Productinfo;
