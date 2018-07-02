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

export default class App extends Component {
	render() {
		return (
			
			<Home>
				<Header/>
				<Text>Header</Text>
				<Text>Buscador</Text>
				<Text>Categorías</Text>
				<Text>Sugerencias</Text>
			</Home>
		);
	}
}
