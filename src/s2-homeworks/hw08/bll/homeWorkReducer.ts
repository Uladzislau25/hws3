import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case "sort": {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1;   // a после b
                if (a.name < b.name) return -1;  // a перед b
                return 0;                        // равны
            });

            if (action.payload === "down") newState.reverse(); // для обратного порядка

            return newState;
        }

        case "check":
            return state.filter(u => u.age >= action.payload);

        default:
            return state;
    }
};

