import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface ProductState {
  product: productDetails[],
  categories:string[]
}

type productDetails = {
  id:string;
  title:string;
  description:string;
  price:number;
  discountPercentage:number;
  rating:number;
  stock:number;
  brand:string;
  category:string;
  thmubnail:string;
  images:string[];
}

// Define the initial state using that type
const initialState: ProductState = {
  product: [],
  categories:[]
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getProducts: (state, action: PayloadAction<productDetails[]>) => {
      state.product = action.payload
    },
    getCategories:(state, actions:PayloadAction<string[]>)=>{
      state.categories = actions.payload
    }
  },
})

export const { getProducts, getCategories } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.product.product

export default counterSlice.reducer