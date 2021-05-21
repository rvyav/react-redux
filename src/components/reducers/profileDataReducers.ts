import {
    PROFILE_LIST_REQUEST,
    PROFILE_LIST_SUCCESS,
    PROFILE_LIST_FAIL 
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
