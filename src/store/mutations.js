// export const increment = state => {
// 	state.count++
// 	state.history.push('increment')
//  }

export const setProducts = (state, { products, productsFilter, loading }) => {
	state.products = products
	state.productsFilter = productsFilter
	state.loadingCatalog = loading
}

export const setCartProducts = (state, { CartProducts, loading, refetch }) => {
	state.cart = CartProducts
	state.loadingCart = loading
	state.refetchCart = refetch
}

export const setQuantityProductsCart = (state, count) => {
	state.quantityProductsCart = state.quantityProductsCart + count
}