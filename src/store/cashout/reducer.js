import {ADDTOCASHLIST,RESETUSEMONEY,GETCASHLIST} from './action-type';

let defaultState = {
  /** 
   * cashList 格式如下
   * [{
    status: "1",
    last: "200",
    id: "7878955878955878",
    state: "待处理"
  }]
  */
  initLoading: true,
  cashList:[],
  usefulMoney: 800,
}

export const cashInfo = (state = defaultState , action = {}) => {
  switch(action.type){
    case GETCASHLIST:
    state.cashList = [...action.value]
    // state.initLoading = action.initLoading
    state.initLoading = false
    return {...state}
    case ADDTOCASHLIST:
      state.cashList.unshift(action.value);
      return state;
    case RESETUSEMONEY:
      state.usefulMoney = action.value;
      return state;
    default:
      return state;
  }
}