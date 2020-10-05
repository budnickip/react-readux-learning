import React from 'react'
import {connect} from 'react-redux'
import actions from '../duck/actions'

const MoviesForm = (props) => {
    const movieInput = React.createRef()
    const indexInput = React.createRef()

    const addMovie = (event) =>{
        event.preventDefault()
        props.add(movieInput.current.value)

        movieInput.current.value = ''
    }

    const updateMovie = (event) =>{
        event.preventDefault()
        props.update(indexInput.current.value, movieInput.current.value)
        console.log(indexInput.current.value, 'nowy: ', movieInput.current.value)
    }
    const resetMovies = () =>{
        //event.preventDefault()
        props.reset()
    }
    const deleteMovie = (event) =>{
        event.preventDefault()
        props.deleteItem(indexInput.current.value)
        movieInput.current.value = ''
    }
//indexInput do pobierania indexu który ma być usunięty lub zeedytowany ;d
    return   <form onSubmit={addMovie}>
                <input ref={indexInput}/>
                <input ref={movieInput} />
                <button type='submit'>Add movie</button>
                <button type='button' onClick={updateMovie}>update</button>
                <button type='button' onClick={resetMovies}>Reset</button>
                <button type='button' onClick={deleteMovie}>Delete</button>
            </form> 
}

const mapDispatchToProps = dispatch => ({
    add: movie => dispatch(actions.add(movie)),
    update: (index,item) => dispatch(actions.update(index,item)),
    reset: () => dispatch(actions.reset()),
    deleteItem: index => dispatch(actions.deleteItem(index))
})
export default connect(null,mapDispatchToProps)(MoviesForm)