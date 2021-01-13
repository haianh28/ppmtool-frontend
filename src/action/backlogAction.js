import axios from "axios"
import { GET_BACKLOGS, GET_ERRORS } from "./type";

export const createProjectTask = (backlog_id,project_task,history) => async (dispatch) =>{
try{
    // call api 
const res = await axios.post(`/api/backlog/${backlog_id}`,project_task);
// thanh con se chuyển trang 
history.push(`/api/backlog/${backlog_id}`)
dispatch({
    type:GET_ERRORS,
    payload:{}
})
}catch(err){
    // không thành cong bắn ra lỗi
    dispatch({
        type:GET_ERRORS,
        payload:err.response.data
    })
}
}
export const getBacklogs = id => async (dispatch) => {
    const res = await axios.get(`/api/backlog/${id}`);
    console.log(res.data)
    dispatch({
        type:GET_BACKLOGS,
        payload:res.data
    })

}