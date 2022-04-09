import React from 'react'
import { MainReducerState } from '../../interfaces';
import { useEffect } from  'react'
type Props = Partial<MainReducerState> & { fetchProductList: Function }

const ProductList = (props: Props) => {
console.log(props)
  // const { fetchProductList,products } = props

  // useEffect(() => {
  //   fetchProductList()
  // },[])
  return (
    <div>
      {/* hfd
      {
        products?.map(p => (
          <div>
            {p.title} - {p.price}
          </div>
        ))
      } */}


    </div>
  )
}

export default ProductList;