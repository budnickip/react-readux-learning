import types from './types'


const add = item => ({type: types.ADD_ACTOR, item})
const deleteItem = index => ({type: types.DELETE_ACTOR, index})
const update = (index, item) => ({type: types.UPDATE_ACTOR, index, item})
const reset = () => ({type: types.RESET_ACTORS})

export default {
    add,
    deleteItem,
    update,
    reset
}