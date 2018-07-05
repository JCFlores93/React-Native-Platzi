import React, { Component } from 'react'
import {
    Text
} from 'react-native';
import { connect } from 'react-redux'
import Home from './screens/containers/home'
import Header from './screens/components/header';
import SuggestionList from './videos/containers/suggestion-list'
import CategoryList from './videos/containers/category-list'
import API from '../utils/api'
import Movie from './screens/containers/movies'
import Search from './sections/containers/search';

class AppLayout extends Component {
    //store viene con las propiedades
    async componentDidMount() {
        const categoryList = await API.getMovies()
        this.props.dispatch({
            type: 'SET_CATEGORY_LIST',
            payload: {
                categoryList
            }
        })
        const suggestionList = await API.getSuggestion(10)
        this.props.dispatch({
            type: 'SET_SUGGESTION_LIST',
            payload: {
                suggestionList
            }
        })
    }
    render() {
        if (this.props.selectedMovie) {
            return <Movie />
        }
        return (
            <Home>
                <Header />
                <Search/>
                <CategoryList />
                <SuggestionList />
            </Home>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        selectedMovie: state.selectedMovie
    }
}
export default connect(mapStateToProps)(AppLayout)