import { atom, selector } from "recoil";
import { CART_ITEM } from "../constants/category";
import { IProduct } from "./products";

export const cartState = atom<IProduct[]>({
    key: "cartState",
    default: [],
  });

// export interface ICartInfo {
//   readonly id: number;
//   readonly count: number;
// }

// export interface ICartItems {
//   readonly id: string;
//   readonly title: string;
//   readonly price: number;
//   readonly count: number;
//   readonly image: string;
// }

// export interface ICartState {
//   readonly items?: Record<string | number, ICartInfo>;
// }

// /**
//  * 카트의 상태는 localStorage 기준으로 초기화 됩니다.
//  * 카트의 상태는 새로고침해도 유지되어야 하기 때문입니다.
//  */
// export const cartState = atom<ICartState[]>({
//   key: "cart",
//   default: [],
//   effects: [
//     ({ setSelf, onSet }) => {
//       localStorage.getItem(CART_ITEM) && setSelf(JSON.parse(localStorage.getItem(CART_ITEM) as string));
//       onSet((value) => localStorage.setItem(CART_ITEM, JSON.stringify(value)));
//     },
//   ],
// });


// /**
//  * cartList를 구현 하세요.
//  * id, image, count 등을 return합니다.
//  */

// // addToCart는 구현 해보세요.

// // removeFromCart는 참고 하세요.
// export const removeFromCart = (cart: ICartState, id: string) => {
//   const tempCart = { ...cart };
//   if (tempCart[id].count === 1) {
//     delete tempCart[id];
//     return tempCart;
//   } else {
//     return { ...tempCart, [id]: { id: id, count: cart[id].count - 1 } };
//   }
// };

// /**
//  * 그 외에 화면을 참고하며 필요한 기능들을 구현 하세요.
//  */