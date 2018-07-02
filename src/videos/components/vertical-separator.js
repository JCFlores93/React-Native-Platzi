import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const Separator = (props) => {
    return (
        <View style={[
            styles.separator,
            {
                borderTopColor: (props.color) ? props.color : "red",
            }
            ]}>
            <Text>Separador</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    separator: {
        borderWidth: 1,
    }
})
export default Separator