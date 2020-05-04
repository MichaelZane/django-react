import axios from 'axios'

import {GET_LEADS, ADD_LEAD, DELETE_LEAD} from './types'

import { createMessage, returnErrors } from './messages';
// import { tokenConfig } from './auth';

//GET LEADS Actions

export const getLeads = () => dispatch => {
    axios
        .get('/api/leads/')
        .then(res => {
            dispatch({
            type: GET_LEADS,
            payload: res.data
            })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

//DELETE LEAD

export const deleteLead = (id) => dispatch => {
    axios
        .delete(`/api/leads/${id}/`)
        .then(res => {
            dispatch(createMessage({ deleteLead: "You have deleted a Lead" }))
            dispatch({
            type: DELETE_LEAD,
            payload: id
            })
        })
        .catch(err => console.log(err))
}

//ADD LEAD

export const addLead = (lead) => dispatch => {
    axios
        .post('/api/leads/', lead)
        .then(res => {
            dispatch(createMessage({ addLead: "You have added a Lead" }))
            dispatch({
            type: ADD_LEAD,
            payload: res.data
            })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}