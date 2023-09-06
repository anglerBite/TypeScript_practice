//string number boolean型
{
    var count = 10;
    var hasValue = true;
    var negative = -0.12;
    var float = 3.14;
    var single = 'hello';
    var double = 'hello';
    var back = 'hello';
}
//オブジェクト型
{
    var person = {
        name: 'jack',
        age: 21
    };
}
//Tuple型(配列に型の順番を指定)
//Array型(配列型)
{
    var fruits = ['Apple', 'Banana', 'Grape', 1];
    var array = [1, 2];
    var book = ['business', 1500, false];
    book.push(21);
    console.log(book[0]);
}
//enum型
{
    var CoffeeSize = void 0;
    (function (CoffeeSize) {
        CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
        CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
        CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
        CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
    })(CoffeeSize || (CoffeeSize = {}));
    var coffee = {
        hot: true,
        size: CoffeeSize.TALL
    };
    console.log(CoffeeSize.SHORT);
}
//any型
{
    var anything = true;
    anything = 'hello';
    anything = ['hello', 33, true];
    anything = {};
    var string = '文字';
    string = anything; //any型の場合は代入可能
}
//union型
{
    var unionType = 10;
    var unionTypes = [21, 'hello'];
}
//リテラル型(constを使うとリテラル型になる)
{
    var apple = 'hello'; //NG
    var apples = 'apples'; //OK(完全一致の文字列しか受け付けない)
}
//Typeエイリアス
{
    var apple = 'apple';
    var clothSize = 'large';
    var cloth = {
        color: 'white',
        size: 'medium'
    };
}
//関数型
{
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 3);
    function sayHello() {
        console.log('Hello!');
    }
    //変数に関数を代入する場合
    var anotherAdd = add;
    //アロー関数の場合
    //コールバック関数の場合
}
//unknown型(何でも入れれるが使うときはif文を組み合わせる)
{
    var unknownInput = void 0;
    var anyInput = void 0;
    var text = void 0;
    unknownInput = 'hello';
    unknownInput = 21;
    //text = unknownInput←NGになる
    if (typeof unknownInput === 'string') {
        text = unknownInput;
    }
}
//never型()
{
    function error(message) {
        throw new Error(message);
    }
    console.log(error('This is an error'));
}
