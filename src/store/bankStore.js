// This module is for bank state management. It stores the account types, balance etc
import { create } from "zustand";
import { persist } from "zustand/middleware";

const parseDay = (day) => {
  const weekmap = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };
  return weekmap[day];
};

const useBankStore = create(
  persist(
    (set) => ({
      username: '',
      balance: 0,
      transactions: [],
      isLoggedIn: false,

      login: (username, balance, transactions, isLoggedIn) =>
        set({ username, balance, transactions, isLoggedIn }),

      logout: () =>
        set({
          username: '',
          balance: 0,
          transactions: [],
          isLoggedIn: false
        }),

      deposit: (amount) => {
        const amt = parseFloat(amount);
        return set((state) => ({
          balance: state.balance + amt,
          transactions: [
            ...state.transactions,
            { type: 'deposit', amount: amt, day: parseDay(new Date().getDay()) }
          ]
        }));
      },

      withdraw: (amount) => {
        const amt = parseFloat(amount);
        return set((state) => ({
          balance: state.balance - amt,
          transactions: [
            ...state.transactions,
            { type: 'withdrawal', amount: amt, day: parseDay(new Date().getDay()) }
          ]
        }));
      }
    }),
    {
      name: 'user-data',
      version: 1
    }
  )
);

export default useBankStore;

// import {create} from "zustand"
// import { persist } from "zustand/middleware"


// const parseDay = (day) => {
//     const weekmap = {
//         0: 'Monday',
//         1: 'Tuesday',
//         2: 'Wednesday',
//         3: 'Thursday',
//         4: 'Friday',
//         5: 'Saturday',
//         6: 'Sunday'
//     }

//     return weekmap[day]
// }

// const useBankStore = create(
//     persist((set) => ({
//             username: '',// User is null because user is not logged in
//             balance: 0, //account balance is zero because user is has not made any transaction yet
//             transactions: [],
//             isLoggedIn: false,

//             login: (username, balance, transactions, isLoggedIn) => set({
//                 username,  balance, transactions, isLoggedIn
//             }),

//             logout: () =>set({
//                 isLoggedIn: false
//             }),

//             deposit: (amount) => set((state)=>({
//                 balance: parseFloat(state.balance) + amount,
//                 transactions: [...state.transactions, {type: 'deposit', amount:parseFloat(amount), day: parseDay(new Date().getDay())}]
                
//             })),
            
//             withdraw: (amount) => set((state)=>{
//                 return {
//                     balance: parseFloat(state.balance) - parseFloat(amount),
//                     transactions: [...state.transactions, {type: 'withdrawal', amount: parseFloat(amount), day: parseDay(new Date().getDay())}]
                    
//                 }
                
//             })
//         }
//     ),
//     {
//         name: 'user-data'
//     }
// ))


// export default useBankStore