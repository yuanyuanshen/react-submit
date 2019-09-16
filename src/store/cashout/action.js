import {ADDTOCASHLIST,RESETUSEMONEY} from './action-type';

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