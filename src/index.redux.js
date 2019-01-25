import { createStore } from 'redux';
import todoApp from './reducers';
import {
    addToDo,
    toggleToDo,
    setVisibilityFilter,
    VisibilityFilters,
} from './actions';

const store = createStore(todoApp);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addToDo('Learn about actions'));
store.dispatch(addToDo('Learn about reducers'));
store.dispatch(addToDo('Learn about store'));
store.dispatch(toggleToDo(0));
store.dispatch(toggleToDo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();