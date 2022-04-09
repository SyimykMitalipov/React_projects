import { ThunkDispatch } from 'redux-thunk';
import { fetchProductList } from './../../store/action';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MainReducerState } from './../../interfaces/index';
import ProductList from './ProductList';

const mapStateToProps = (state: MainReducerState): Partial<MainReducerState> => ({...state})
const mapDispatchToProps = (dispatch: Dispatch & ThunkDispatch<any, any,any>) => ({
    fetchProductList: () => dispatch(fetchProductList) 
})



export default connect(mapStateToProps,mapDispatchToProps)(ProductList)