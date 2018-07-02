/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Text
} from 'react-native';

import Home from './src/screens/containers/home'
import Header from './src/screens/components/header';
import SuggestionList from './src/videos/containers/suggestion-list'
import API from './utils/api'

export default class App extends Component {
	async componentDidMount() {
		const movies = await API.getSuggestion(10)
		console.log('====================================');
		console.log(movies);
		console.log('====================================');
	}
	render() {
		return (			
			<Home>
				
				<Header/>
				<Text>Header</Text>
				<Text>Buscador</Text>
				<Text>Categorías</Text>
				<SuggestionList/>
			</Home>
		);
	}
}
