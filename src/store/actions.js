import { useQuery, provideApolloClient } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ApolloClient } from "@apollo/client/core";
import { getClientOptions } from "src/apollo/index";

// export const increment = ({ commit }) => {
// 	commit('increment')
//  }
//  export const decrement = ({ commit }) => {
// 	commit('decrement')
//  }

//  export const incrementIfOdd = ({ commit, state }) => {
// 	if ((state.count + 1) % 2 === 0) {
// 	  commit('increment')
// 	}
//  }

//  export const incrementAsync = ({ commit }) => {
// 	setTimeout(() => {
// 	  commit('increment')
// 	}, 1000)
//  }

export const GET_PRODUCTS = ({ commit }) => {
	const fetching = async () => {
		console.log("fetching");
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
			commit("setProducts", result?.value?.products)
			console.log("!!!!!!!!!!!", result?.value);
		} catch (e) {
			console.log(e);
		}
	};
	fetching();
} 