import { MainReducerState, Action } from './../interfaces/index';
import { ThunkDispatch } from 'redux-thunk'
import API from '../utilts/api'
export const setMainState = (payload: Partial<MainReducerState>): Action => ({
    type: 'SET_MAIN_STATE',
    payload
})


export const fetchProductList = () => async (
    dispatch: ThunkDispatch<MainReducerState, any, Action>,
    getState: () => Partial<MainReducerState>
): Promise<void> => {
    try {
        const { searchString } = getState()
        dispatch(setMainState({ loading: true }))
        const result = await API.get(`/products?title_like=${searchString}`)
        dispatch(setMainState({ products: result.data }))
} catch(e) {
    console.log(e)
} finally {
    dispatch(setMainState({ loading: false }))
}
    }