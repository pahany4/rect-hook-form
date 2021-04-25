const SEARCH_CITY = 'SEARCH_CITY'
const UPDATE_VALID_CITY = 'UPDATE_VALID_CITY'

let initialState = {
    city: {
        listCity: [],
        city: {},
        validCity: true
    }
}

const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_VALID_CITY:
            return {
                ...state,
                city: {
                    ...state.city,
                    validCity: action.bodyValidCity
                }
            }
        case SEARCH_CITY:
            return {
                ...state,
                city: {
                    listCity: action.bodyListCity
                }
            }
    }
}
export const updateValidCity = (status) => ({type: UPDATE_VALID_CITY, bodyValidCity: status});
const updateListCity = (list) => ({type: SEARCH_CITY, bodyListCity: list});

export const ListCity = (city) => {
    return (dispatch) => {
        if (city.length >= 1) {
            apiAddress.searchLocality(city, 10).then(response => {
                dispatch(updateListCity(response.data));
            })
        }
    }
}

export const updateCity = (city, listCity) => {
    return (dispatch) => {
        apiAddress.searchLocality(city, 1).then(response => {
            dispatch(updateCityInformation(response.data[0], listCity, true));
        }).catch(error => alert(error.message))
    }
}