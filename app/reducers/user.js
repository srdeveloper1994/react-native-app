import {
    USER_DETAILS,
} from '../actions/types';
import { appDefaultReducer } from './defaultReducer';

const INITIAL_STATE = appDefaultReducer.user;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_DETAILS: {
            return {
                ...state,
                userDetail: action.payload,
            };
        }
        default:
            return state;
    }
};
