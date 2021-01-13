import { GET_BACKLOGS, GET_BACKLOG, DELETE_BACKLOG } from "../action/type";
// kieu du lieu tra ra la object hoặc array
const inittialState = {
    project_tasks: [],
    project_task: {}
};
export default function (state = inittialState, action) {
    switch (action.type) {
        case GET_BACKLOG:
            return {
                ...state,
                project_task: action.payload
            }
        case GET_BACKLOGS:
            return {
                ...state,
                project_tasks: action.payload
            }
        case DELETE_BACKLOG:
            return {
                ...state,
                // project_task: project_task.state.filter(project_task => {
                //     project_task.id !== action.payload
                // })
            }
        default:
            return state;
    }
}