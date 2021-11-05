import { toppingType } from "./toppingType";
import { userInfoType } from "./userInfoType" 
export interface cartItemType {
    itemId?:number|string;
    itemName?:string;
    itemPrice?:number;
    itemImg?:string;
    itemNum?:number|undefined;
    toppings?: toppingType[]|null;
    orderId?:string;
    status?:0;
    allToppingPrice?:number|undefined;
    totalPrice?:number|undefined;
    specialId?:string;
}

export interface orderItemType {
    itemInfo?:cartItemType[]|undefined;
    status?:number;
    orderId?:string|null|undefined;
}

export interface orderInfoType {
    userInfo?:userInfoType|null;
    name?: string;
    email?: string;
    postalcode?: string;
    address?: string;
    tel?: string;
    deliveryDate: string;
    deliveryTime: string;
    payment: number;
    creditCardNum: string;
    selectPayment: boolean;
    allPrice?:number|undefined;
}

export interface orderedItemType {
    itemInfo?:cartItemType[];
    status?:number;
    orderInfo?:orderInfoType;
    orderId?:string;
}