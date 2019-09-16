import {ADDTOCASHLIST,RESETUSEMONEY} from './action-type';

let defaultState = {
  cashList:[],
  usefulMoney: 800,
}

export const cashInfo = (state = defaultState , action = {}) => {
  switch(action.type){
    case ADDTOCASHLIST:
      state.cashList.push(action.value);
      return state;
    case RESETUSEMONEY:
      state.usefulMoney = action.value;
      return state;
    default:
      return state;
  }
}