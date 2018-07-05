import React, { Component } from 'react'
import {
    Text,
    Animated
} from 'react-native'
import MovieLayout from '../components/movie'
import Player from '../../player/containers/player'
import Header from '../components/header'
import Close from '../../sections/components/close'
import { connect } from 'react-redux'
import Details from '../../videos/components/details';

class Movie extends Component {
    state = {
        opacity: new Animated.Value(0)
    }

    componentDidMount() {
        Animated.timing(
            this.state.opacity,
            {
                toValue: 1,
                duration: 1000
            }
        ).start()
    }
    closeVideo = () => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: null
            }
        })
    }
    render() {
        return (
            <Animated.View
                style={{
                    flex:1,
                    opacity: this.state.opacity
                }}
            >
                <MovieLayout>
                    <Header>
                        <Close
                            onPress={this.closeVideo}
                        />
                    </Header>
                    <Player />
                    <Details {...this.props.movie} />
                </MovieLayout>
            </Animated.View>
        )
    }
}
const mapStateToProps = state => {
    return {
        movie: state.selectedMovie
    }
}
export default connect(mapStateToProps)(Movie)