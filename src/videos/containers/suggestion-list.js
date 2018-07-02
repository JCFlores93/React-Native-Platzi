import React, { Component } from 'react'
import {
    FlatList,
    Text
} from 'react-native'
import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'

class SuggestionList extends Component {
    renderEmpty = ()=> <Empty text="No hay sugerenicas"/>
    itemSeparator = () => <Separator/>
    render() {
        const list = [
            {
                title: 'Avengers',
                key: '1'
            },
            {
                title: 'Pokemon',
                key: '2'
            }
        ]
        return (
            <Layout
                title="Recomendado para tí"
            >
                <FlatList
                    data={list}
                    renderItem={({ item }) => <Text>{item.title}</Text>}
                    ItemSeparatorComponent={this.itemSeparator}
                    ListEmptyComponent={this.renderEmpty}
                />
            </Layout>
        )
    }
}

export default SuggestionList