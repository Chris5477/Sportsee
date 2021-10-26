import { ERROR_GET_DATA_USER, LOAD_DATA_USER, SUCCESS_GET_DATA_USER } from "../dataUser/actionDataUser"

const dataStateUser = {
    isLoading : false,
    dataUser : {},
    error :"" 

}


export const dataUserReducer = (state = dataStateUser, action) => {

    switch (action.type){
        case LOAD_DATA_USER:
            return{
                ...state,
                isLoading : true
            }
        case SUCCESS_GET_DATA_USER:
            return{
                ...state,
                isLoading : false,
                dataUser: action.payload,
                error : ""
            }
        case ERROR_GET_DATA_USER:
            return{
                ...state,
                isLoading: false,
                dataUser: {},
                error: action.payload

            }
        default : return state
    }
}