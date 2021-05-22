
import {
    PROFILE_LIST_REQUEST,
    PROFILE_LIST_SUCCESS,
    PROFILE_LIST_FAIL,
    PROFILE_DETAILS_REQUEST,
    PROFILE_DETAILS_SUCCESS,
    PROFILE_DETAILS_FAIL,
} from "../constants/profileConstants";


export const profileListReducer = (state: any = { profiles: []}, action: any): any => {
    switch (action.type) {
        case PROFILE_LIST_REQUEST:
            return { loading: true, profiles: []};

        case PROFILE_LIST_SUCCESS:
            return { loading: true, profiles: action.payload};
        
        case PROFILE_LIST_FAIL:
            return { loading: true, error: action.payload};

        default:
            return state
    };
};


export const profileDetailsReducer = (state: any = { profiles: {reviews:[]}}, action: any): any => {
    switch (action.type) {
        case PROFILE_DETAILS_REQUEST:
            return { loading: true, ...state};

        case PROFILE_DETAILS_SUCCESS:
            return { loading: true, profiles: action.payload};
        
        case PROFILE_DETAILS_FAIL:
            return { loading: true, error: action.payload};

        default:
            return state
    };
};

