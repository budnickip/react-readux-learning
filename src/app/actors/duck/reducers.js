import types from './types'

const INITIAL_STATE = {
    listname: 'Best',
    list: [
      'Gabriel Macht', 'Megan Fox', 'Mike Ross'
    ]
  }

  const actorsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
      case types.ADD_ACTOR:
        return{
          ...state, list: [...state.list, action.item]
        }
      case types.DELETE_ACTOR: {/* Dodatkowo sobie zrobiłem usuwanie :D */}
        return{
          ...state, list: [...state.list.slice(0,action.index).concat(...state.list.slice(action.index+1))]
        }
      case types.UPDATE_ACTOR: {/* oraz aktualizacje :D */}
        return{
          ...state, list: [...state.list.slice(0,action.index).concat(action.item).concat(...state.list.slice(action.index+1))]
        }
      case types.RESET_ACTORS:
        return {
          ...state, list: []
        }
      default:
        return state
    }
  }

export default actorsReducer