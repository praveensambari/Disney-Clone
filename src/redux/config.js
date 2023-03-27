import {combineReducers, createStore} from 'redux'

export function showDataAction(showData){
    return{
        type: "SHOWDATA",
        payload: showData
    }
}

let showDataReducer=(state=[],action)=>{
    switch(action.type){
        case 'SHOWDATA' : return state=action.payload;
        default : return state
    }
}

// let pizzaReducer=(state=[],action)=>{
//     switch(action.type){
//         case 'ADDPIZZA' : return [...state.sort(),action.payload];
//         case 'REMOVEPIZZA' : return [...state.filter((ele)=>{ return ele !== action.payload})];
//         case 'REMOVEONEPIZZA' : return [...state.filter(((i => v => v !== action.payload || --i)(1)))];
//         case 'CLEAR' : return state=[];
//         default : return state
//     }
// }
// let ingReducer=(state=[],action)=>{
//     switch(action.type){
//         case 'ONEING' : return [...state,action.payload];
//         case 'REMOVEONEING' : return [...state.filter((ele)=>{ return parseInt(ele) !== action.payload})];
//         case 'ALLING' : return state=[];
//         case 'CLEAR'  : return state=[];
//         default : return state
//     }
// }
//end



let rootReducer=combineReducers({oneshow:showDataReducer});

export let store=createStore(rootReducer)