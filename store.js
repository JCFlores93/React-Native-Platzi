import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers/videos'

// const store = createStore(reducer, {
//     suggestionList: [],
//     categoryList: [],
// })

const persistConfig = {
    key: 'root',
    storage,
    blackList: ['selectedMovie']
}
const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }