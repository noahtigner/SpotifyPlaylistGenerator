interface UserData {
    token: string,
    id: string
}

const storedUserData : {[key: string]: any } = JSON.parse(window.localStorage.getItem('userData') || '{"token": "", "id": ""}');

const initialState: UserData = {
    token: storedUserData.token,
    id: storedUserData.id,
}

const userDataReducer = (state: UserData = initialState, action: {[key: string]: any }) => {
    switch(action.type) {
        case 'userData/updated': {
            window.localStorage.setItem('userData', 
                JSON.stringify({
                    token: action.payload.token,
                    id: action.payload.id,
                })
            );

            return {
                ...state,
                token: action.payload.token,
                id: action.payload.id,
            }
        }
        default:
            return state;
    }
}

export default userDataReducer;
