import {createStore} from 'redux'

var reducer = (prevState=true,action) => {
	switch(action.type){
		case 'hide_tabbar':
		return action.isShow

		case 'show_tabbar':
		return action.isShow

		default:
		return prevState
	}

	return prevState
}

const store = createStore(reducer)

export default store