//string number boolean型
{
let count: number = 10;
let hasValue: boolean = true;
let negative: number = -0.12;
let float: number = 3.14;
let single: string = 'hello';
let double: string = 'hello';
let back: string = 'hello';
}


//オブジェクト型
{
const person : {
    name: string;
    age: number;
} = {
    name: 'jack',
    age: 21
}
}


//Tuple型(配列に型の順番を指定)
//Array型(配列型)
{
const fruits = ['Apple', 'Banana', 'Grape', 1];
const array = [1, 2];

const book: [string, number, boolean] = ['business', 1500, false];
book.push(21);
console.log(book[0]);
}


//enum型
{
enum CoffeeSize {
    SHORT,
    TALL,
    GRANDE,
    VENTI
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}

console.log(CoffeeSize.SHORT);
}


//any型
{
let anything: any = true;
anything = 'hello';
anything = ['hello',33, true];
anything = {};

let string = '文字';
string = anything;//any型の場合は代入可能
}


//union型
{
let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, 'hello'];
}


//リテラル型(constを使うとリテラル型になる)
{
let apple: 'apple' = 'hello';//NG
let apples: 'apples' = 'apples';//OK(完全一致の文字列しか受け付けない)
}


//Typeエイリアス
{
type ClothSize = 'small' | 'medium' | 'large';
const apple = 'apple';
let clothSize: ClothSize = 'large';
const cloth: {
    color: string;
    size: ClothSize
} = {
    color: 'white',
    size: 'medium'
}
}


//関数型
{
function add(num1: number, num2: number): number /*←は戻り値の型*/{
    return num1 +  num2
}

add(2,3);

function sayHello(): void/*戻り値がない場合はvoidになる*/{
    console.log('Hello!');
}

sayHello();

//変数に関数を代入する場合
const anotherAdd: (n1: number, n2: number) => number = add;

//アロー関数の場合

//コールバック関数の場合

}


//unknown型(何でも入れれるが使うときはif文を組み合わせる)
{
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
//text = unknownInput←NGになる
if (typeof unknownInput === 'string'){
    text = unknownInput;
}
}


//never型()
{
function error(message: string): never{
    throw new Error(message);
}
console.log(error('This is an error'));
}