// export const increment = state => {
// 	state.count++
// 	state.history.push('increment')
//  }

export const setProducts = (state, products) => {
	state.products = products
}
export const setProductsFilter = (state, productsFilter) => {
	state.products = productsFilter
}

export const setCartProducts = (state, CartProducts) => {
	state.cart = CartProducts
}

export const setCountCartProducts = (state, index, count) => {
	state.cart[index] = count
}