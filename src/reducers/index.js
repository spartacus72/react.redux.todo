import { combineReducers } from 'redux';
import visibilityFilter from './VisibilityFilter';
import todos from './Todos';

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;