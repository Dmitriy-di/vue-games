import { useQuery, provideApolloClient } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ApolloClient } from "@apollo/client/core";
import { getClientOptions } from "src/apollo/index";

export const GET_PRODUCTS = ({ commit }) => {
	const fetching = async () => {
		try {
			const { result, loading, error } = await useQuery(
				gql`
	         query MyQuery {
	           products {
	             category
	             discount
	             gender
	             name
	             oldprice
	             todayprice
	             url
	           }
	         }
	       `
			);
			commit("setProducts", { products: result?.value?.products, productsFilter: result?.value?.products, loading: loading })
			console.log(result?.value?.products);
		} catch (e) {
			console.log("Ошибка:", e);
		}
	};
	fetching();
}

export const GET_CART_PRODUCTS = ({ commit }) => {
	const fetching = async () => {
		try {
			const { result, loading, error, refetch } = await useQuery(gql`
			query MyQuery {
			  cartItems {
				 category
				 discount 
				 gender
				 name
				 oldprice
				 todayprice
				 url
				 id
			  }
			}
		 `, null, {
				pollInterval: 1000,
			}
			);
			commit("setCartProducts", { CartProducts: result?.value?.cartItems, loading: loading, refetch: refetch })
		} catch (e) {
			console.log("Ошибка:", e);
		}
	};
	fetching();
} 