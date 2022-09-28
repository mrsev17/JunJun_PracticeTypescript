"use strict";
const obj = {
    name: "John",
    surname: "Smith",
};
obj.name = "Pete";
delete obj.name;
console.log(obj.name);
const myArr = [1, 2, 3, -1, -2, -3];
function moreZeroOrNot(x) {
    for (let i = 0; i < x.length; i += 1) {
        if (x[i] < 0) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
}
moreZeroOrNot(myArr);
