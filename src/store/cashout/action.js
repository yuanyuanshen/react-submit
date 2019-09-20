import {ADDTOCASHLIST,RESETUSEMONEY,GETCASHLIST} from './action-type';
import API from '@/api/api.js'

// 保存表单数据
export const addToCashList = (value) => {
  return {
    type: ADDTOCASHLIST,
    value
  }
}
// 更新可用余额
export const resetUseMoney = (value) => {
  return {
    type: RESETUSEMONEY,
    value
  }
}
// 获取提现记录列表，保存至redux
export const getCashList = () => {
  return async dispatch => {
    try{
      const value = await API.getCashList();
      dispatch({
        type: GETCASHLIST,
        value,
        initLoading:false
      })
    }catch(err){
      console.error(err);
    }
  }
}