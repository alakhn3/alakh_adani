//question 1:-
// Input
const portfolio = [
    {name: 'Mark', stock: 'FB'},
    {name: 'Steve', stock: 'AAPL'},
    {name: 'Tim', stock: 'AAPL'},
    {name: 'Steve', stock: 'MSFT'},
    {name: 'Bill', stock: 'MSFT'},
    {name: 'Bill', stock: 'AAPL'},
    ];

function quesFirst (portfolio) {
    let output = [];
    portfolio.map((val) => {
        let check = output.find((value) => {
            return value.stock && value.stock === val.stock
        })
        //console.log("val", val);
        //console.log("temp", temp);
        if (check === undefined) {
            let name = [];
                name.push(val.name);
                output.push({
                    stock: val.stock,
                    name: name,
                    count: 1
                })
        } else {
            check['name'].push(val.name);
            check['count'] += 1;
        }
    })
    return output;  

}


console.log( "output : " , quesFirst(portfolio) )


// Output
// const shareholder = [
//     {stock: 'AAPL', name:['Steve', 'Bill', 'Tim'], count:3},
//     {stock: 'MSFT', name:['Steve', 'Bill'], count:2},
//      {stock: 'FB', name:['Mark'], count:1},
// ];