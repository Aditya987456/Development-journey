import { atom, selector } from "recoil";

export const CounterAtom = atom({
    key:'counting',
    default:0
    
})


export const isEvenSelector=selector({
    key:'isEven',
    get:({get})=>{
        const countVal=get(CounterAtom);
        return countVal%2;

    }
})