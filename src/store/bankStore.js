// This module is for bank state management. It stores the account types, balance etc

import {create} from "zustand"
import { persist } from "zustand/middleware"


const parseDay = (day) => {
    const weekmap = {
        0: 'Monday',
        1: 'Tuesday',
        2: 'Wednesday',
        3: 'Thursday',
        4: 'Friday',
        5: 'Saturday',
        6: 'Sunday'
    }

    return weekmap[day]
}

const useBankStore = create(
    persist((set) => ({
            username: '',// User is null because user is not logged in
            balance: 0, //account balance is zero because user is has not made any transaction yet
            transactions: [],
            message: '',
            isLoggedIn: false,

            login: (username, balance, transactions) => set({
                username,  balance, transactions
            }),

            deposit: (amount) => set((state)=>({
                balance: parseFloat(state.balance) + amount,
                transactions: [...state.transactions, {type: 'deposit', amount:parseFloat(amount), day: parseDay(new Date().getDay())}]
                
            })),
            
            withdraw: (amount) => set((state)=>{
                if(parseFloat(amount) < parseFloat(state.balance)){
                    return {
                        balance: parseFloat(state.balance) - parseFloat(amount),
                        transactions: [...state.transactions, {type: 'withdrawal', amount: parseFloat(amount), day: parseDay(new Date().getDay())}]
                        
                    }
                }else{
                    return {
                        ...state
                    }
                }
                
            })
        }
    ),
    {
        name: 'user-data'
    }
))


export default useBankStore