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
                // dùng như này giúp nó tự lọc luôn không cần phải reload trang để mất data
                project_tasks: state.project_tasks.filter(
                    project_task => project_task.projectSequence !== action.payload
                  )
            }
        default:
            return state;
    }
}