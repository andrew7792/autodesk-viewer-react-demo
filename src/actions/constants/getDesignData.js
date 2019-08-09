import { defineAction } from 'redux-define';

import { DEFAULT_FETCH_STATES } from './actionStates';

export const GET_DESIGN_DATA = defineAction('GET_DESIGN_DATA', DEFAULT_FETCH_STATES);
