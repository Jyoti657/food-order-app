// import { createContext, useState } from "react";

// const UserProgressContext = createContext({
//   progress: "", // cart ,'checkout'
//   showCart: () => {},
//   hidCart: () => {},
//   showCheckout:()=>{},
//   hideCheckout: () => {},
// });

//  export function UserProgressContextProvider({children}){
//     const[userprogress, setUserProgress]=useState('')
//     function showCart(){
//         setUserProgress('cart')
//     }
//     function hidCart(){
//         setUserProgress('')
//     }
//     function showCheckout(){
//         setUserProgress('checkout')
//     }
//     function hideCheckout(){
//         setUserProgress('')
//     }

//     //  now after creating the state 
//     // we have creat userProgreesCtx
//      const userProgreesCtx={
//         progress:userprogress,
//         showCart,
//         hidCart,
//         showCheckout,
//         hideCheckout
//      }

//     return <UserProgressContext.Provider 
//     value={userProgreesCtx}>
//         {children}
//     </UserProgressContext.Provider>
// }

// export default UserProgressContext;
import { createContext, useState } from 'react';

const UserProgressContext = createContext({
  progress: '', // 'cart', 'checkout'
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState('');

  function showCart() {
    setUserProgress('cart');
  }

  function hideCart() {
    setUserProgress('');
  }

  function showCheckout() {
    setUserProgress('checkout');
  }

  function hideCheckout() {
    setUserProgress('');
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;