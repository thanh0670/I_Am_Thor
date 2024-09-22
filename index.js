
/*
    FUNCTION
        Declare function/Function Declaration co hoisting
        Express function/Function Expression khong co hoisting
        IIFE  Immediately invoked function expression la thuc thi ham funtion ngay lap tuc
            (()=>{

            })();
    SPREAD va REST
    rest parameter : truyen vao tham so cua ham funtion vd const hienthi=(...arr)=>{} cac tham so truyen vo parameter se duoc truyen vo 1 cai mang đã đặt
    Spread operator : clone lại mãng
        let arr1 = [3, 5, 1];
        let arr2 = [8, 9, 15];
        let merged = [0, ...arr1, 2, ...arr2];
        console.log(merged);

*/
import { UISelector } from "./utils/UISelector.js";
import { textArray } from "./utils/textArray.js";
let nameText = [];
let numberName = "";
let t = true;
UISelector.borderText.innerHTML = textArray;
const runTyping = async () => {
    while (t) {
        for (let i = 0; i < textArray.length; i++) {
            nameText = textArray[i].split('');
            UISelector.searchText.innerHTML = "";
            await new Promise((resolve) => {
                setTimeout(resolve, 500);
            })
            for (let j = 0; j < nameText.length; j++) {
                numberName = nameText[j];
                console.log(numberName);
                UISelector.searchText.innerHTML += numberName;
                await new Promise((resolve) => {
                    setTimeout(resolve, 200);
                })
            }

        }
    }

};

runTyping();







