
import {
    PROFILE_LIST_REQUEST,
    PROFILE_LIST_SUCCESS,
    PROFILE_LIST_FAIL,
    PROFILE_DETAILS_REQUEST,
    PROFILE_DETAILS_SUCCESS,
    PROFILE_DETAILS_FAIL,
    PROFILE_CREATE_REQUEST,
    PROFILE_CREATE_SUCCESS,
    PROFILE_CREATE_FAIL,
    PROFILE_DELETE_REQUEST,
    PROFILE_DELETE_SUCCESS,
    PROFILE_DELETE_FAIL,
    // PROFILE_UPDATE_REQUEST,
    // PROFILE_UPDATE_SUCCESS,
    // PROFILE_UPDATE_FAIL,
} from "../constants/profileConstants";
import { apiData } from "../data";
import { apiDataType } from "../types";


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

export const profilesCreate = (payload: Array<apiDataType>) => async (dispatch: Function) => {
    try {
        dispatch({type: PROFILE_CREATE_REQUEST});

        dispatch({
            type: PROFILE_CREATE_SUCCESS,
            payload: payload,
        })
    } catch (error) {
        dispatch({
            type: PROFILE_CREATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    };
};

export const profilesDelete = (payload: Array<apiDataType>) => async (dispatch: Function) => {
    try {
        dispatch({type: PROFILE_DELETE_REQUEST});

        dispatch({
            type: PROFILE_DELETE_SUCCESS,
            payload: payload,
        })
    } catch (error) {
        dispatch({
            type: PROFILE_DELETE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    };
};
