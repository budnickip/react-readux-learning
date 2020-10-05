import types from './types'

const INITIAL_STATE = {
    listName: 'Favourite',
    list: [
      "Harry Potter", "Chłopaki nie płaczą", "Szybcy i Wściekli 7"
    ]
  }

  const moviesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
      case types.ADD_MOVIE:
        return{
          ...state, list: [...state.list, action.item]
        }
      case types.DELETE_MOVIE: {/* Dodatkowo sobie zrobiłem usuwanie :D */}
        return{
          ...state, list: [...state.list.slice(0,action.index).concat(...state.list.slice(action.index+1))]
        }
     /* case types.UPDATE_MOVIE: {/* oraz aktualizacje :D }
        return{
          ...state, list: [...state.list.slice(0,action.index).concat(action.item).concat(...state.list.slice(action.index+1))]
        } */
      case types.UPDATE_MOVIE:
        const newList = [...state.list];
        newList[action.index] = action.item; 
        console.log('newlist', newList) // upewnij się ze wszystko gra (moze coś z akcja nie tak...) 
        return {
          ...state, list: newList
        }
      case types.RESET_MOVIES:
        return {
          ...state, list: []
        }
      default:
        return state
    }
  }

  export default moviesReducer