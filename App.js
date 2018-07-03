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
import store from './store'


export default class App extends Component {
	state = {
		suggestionList: [],
		categoryList: []
	}
	async componentDidMount() {
		const movies = await API.getSuggestion(10)
		const categories = await API.getMovies()
		console.log('====================================');
		console.log(movies);
		console.log('====================================');
		console.log('====================================');
		console.log(categories);
		console.log('====================================');
		this.setState({
			suggestionList: movies,
			categoryList: categories
		})
	}
	render() {
		return (
			<Provider
				store={store}
			>
				<Home>
					<Header />
					<Player />
					<Text>Header</Text>
					<Text>Buscador</Text>
					<CategoryList
						list={this.state.categoryList}
					/>
					<SuggestionList
						list={this.state.suggestionList}
					/>
				</Home>
			</Provider>
		);
	}
}
