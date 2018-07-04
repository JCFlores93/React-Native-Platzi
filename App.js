/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';

import Home from './src/screens/containers/home'
import Header from './src/screens/components/header';
import SuggestionList from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
import API from './utils/api'
import Player from './src/player/containers/player';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'


export default class App extends Component {
	state = {
		suggestionList: [],
		categoryList: []
	}
	async componentDidMount() {
		const categoryList = await API.getMovies()
		store.dispatch({
			type: 'SET_CATEGORY_LIST',
			payload: {
				categoryList
			}
		})
		const suggestionList = await API.getSuggestion(10)
		store.dispatch({
			type: 'SET_SUGGESTION_LIST',
			payload: {
				suggestionList
			}
		})
		// console.log('====================================');
		// console.log(movies);
		// console.log('====================================');
		// console.log('====================================');
		// console.log(categories);
		// console.log('====================================');
		// this.setState({
		// 	suggestionList: movies,
		// 	categoryList: categories
		// })
	}
	render() {
		return (
			<Provider
				store={store}
			>
				<PersistGate
					loading={<Text>cargando...</Text>}
					persistor={persistor}
				>
					<Home>
						<Header />
						<Player />
						<Text>Header</Text>
						<Text>Buscador</Text>
						<CategoryList />
						<SuggestionList />
					</Home>
				</PersistGate>
			</Provider>
		);
	}
}
