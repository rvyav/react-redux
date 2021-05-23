
import React from "react";
import {
    PROFILE_LIST_REQUEST,
    PROFILE_LIST_SUCCESS,
    PROFILE_LIST_FAIL,
    PROFILE_DETAILS_REQUEST,
    PROFILE_DETAILS_SUCCESS,
    PROFILE_DETAILS_FAIL,
    PROFILE_DELETE_REQUEST,
    PROFILE_DELETE_SUCCESS,
    PROFILE_DELETE_FAIL,
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


// export const profileCreateReducer = (state: any = { profiles: {}}, action: any): any => {
//     switch (action.type) {
//         case PROFILE_CREATE_REQUEST:
//             return { loading: true, ...state};

//         case PROFILE_CREATE_SUCCESS:
//             return { loading: true, profiles: action.payload};
        
//         case PROFILE_CREATE_FAIL:
//             return { loading: true, error: action.payload};

//         default:
//             return state
//     };
// };


export const profileDeleteReducer = (state: any = { profiles:[]}, action: any): any => {
    switch (action.type) {
        case PROFILE_DELETE_REQUEST:
            return { loading: true,
                ...state,
            };

        case PROFILE_DELETE_SUCCESS:
            return { loading: true,
                ...state,
                profiles: state.profiles.filter((element: any) => element.id !== action.payload)
            };

        case PROFILE_DELETE_FAIL:
            return { loading: true, error: action.payload};

        default:
            return state
    };
};


// export const profileDeleteReducer = (state: any = { profiles: []}, action: any): any => {
//     switch (action.type) {
//         case PROFILE_DELETE_REQUEST:
//             return { loading: true, ...state };

//         case PROFILE_DELETE_SUCCESS:
//             return { loading: true, profiles: action.payload };

//         case PROFILE_DELETE_FAIL:
//             return { loading: true, error: action.payload};

//         default:
//             return state
//     };
// };
