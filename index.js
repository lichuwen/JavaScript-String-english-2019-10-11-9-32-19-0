// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';

console.log(name.toUpperCase())


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';

var res = sentence.split(' ')
for(var i=0; i<res.length; i++){
    res[i] = res[i].charAt(0).toUpperCase()+res[i].slice(1);
}
console.log(res.join(' '))



// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';

var index = money.lastIndexOf('￥');
money = money.substring(index+1,money.length)
console.log(money)

