import {ADDTOCASHLIST,RESETUSEMONEY} from './action-type';

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
  cashList:[
    {
    status: "1",
    last: "200",
    id: "7878955878955878",
    state: "待处理"
    },
    {
    status: "2",
    last: "40",
    id: "8758755896358963",
    state: "已到账"
    },
    {
    status: "2",
    last: "23",
    id: "8962896214121412",
    state: "已到账"
    },
    {
    status: "2",
    last: "67",
    id: "2532533365433654",
    state: "已到账"
    }
    ],
  usefulMoney: 800,
}

export const cashInfo = (state = defaultState , action = {}) => {
  switch(action.type){
    case ADDTOCASHLIST:
    debugger
      state.cashList.push(action.value);
      return state;
    case RESETUSEMONEY:
      state.usefulMoney = action.value;
      return state;
    default:
      return state;
  }
}