import types from './types'

const add = item => ({type: types.ADD_MOVIE, item})
const deleteItem = index => ({type: types.DELETE_MOVIE, index})
const update = (index, item) => ({type: types.UPDATE_MOVIE, index, item})
const reset = () => ({type: types.RESET_MOVIES})

export default {
    add,
    deleteItem,
    update,
    reset
}