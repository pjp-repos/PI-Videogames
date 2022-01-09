import {createStore} from 'redux';

import reducer from './reducers/reducers';

const store = createStore(reducer);

// store.subscribe();

export default store;