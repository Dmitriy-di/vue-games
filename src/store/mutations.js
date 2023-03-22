// export const increment = state => {
// 	state.count++
// 	state.history.push('increment')
//  }

export const setProducts = (state, { products, productsFilter, loading }) => {
	state.products = products
	state.productsFilter = productsFilter
	state.loadingCatalog = loading
}

export const setCartProducts = (state, { CartProducts, loading }) => {
	state.cart = CartProducts
	state.loadingCart = loading
}