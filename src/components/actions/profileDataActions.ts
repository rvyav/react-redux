
import {
    PROFILE_LIST_REQUEST,
    PROFILE_LIST_SUCCESS,
    PROFILE_LIST_FAIL,
    PROFILE_DETAILS_REQUEST,
    PROFILE_DETAILS_SUCCESS,
    PROFILE_DETAILS_FAIL,
} from "../constants/profileConstants";

import { apiData } from "../data";

export const profilesList = () => async (dispatch: Function) => {
    try {
        dispatch({type: PROFILE_LIST_REQUEST});

        const data = apiData;

        dispatch({
            type: PROFILE_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PROFILE_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    };
};


export const profilesDetails = (id: number) => async (dispatch: Function) => {
    try {
        dispatch({type: PROFILE_DETAILS_REQUEST});

        dispatch({
            type: PROFILE_DETAILS_SUCCESS,
            payload: id,
        })
    } catch (error) {
        dispatch({
            type: PROFILE_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    };
};
