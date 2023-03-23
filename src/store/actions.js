import { useQuery, provideApolloClient } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ApolloClient } from "@apollo/client/core";
import { getClientOptions } from "src/apollo/index";

export const GET_PRODUCTS = ({ commit }) => {
	const fetching = async () => {
		try {
			const { onResult } = useQuery(
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
			onResult(queryResult => {
				commit("setProducts", { products: queryResult?.data?.products, productsFilter: queryResult?.data?.products, loading: queryResult.loading })
			})
		} catch (e) {
			console.log("Ошибка:", e);
		}
	};
	fetching();
}

export const GET_CART_PRODUCTS = ({ commit }) => {
	const fetching = async () => {
		try {
			const { onResult, refetch } = useQuery(gql`
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
			onResult(queryResult => {
				commit("setCartProducts", { CartProducts: queryResult?.data?.cartItems, loading: queryResult.loading, refetch: refetch })
			})
		} catch (e) {
			console.log("Ошибка:", e);
		}
	};
	fetching();
} 