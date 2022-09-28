
interface user {
    name?: string,
    surname: string,
}
const obj:user = {
    name: "John",
    surname: "Smith",
}

obj.name = "Pete";
delete obj.name;



type listNum = Array<number>;
const myArr = [1, 2, 3, -1, -2, -3];

function moreZeroOrNot (x:listNum): boolean {
    for(let i = 0; i < x.length; i += 1) {
        if(x[i] < 0) {
            return false;
        }
    }
    return true;
}

moreZeroOrNot(myArr);


