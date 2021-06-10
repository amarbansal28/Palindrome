function palindrome(n){
    let p = n.split('').reverse().join('');
    if(p === n){
        return 'string is palindrome';
    }
    return 'string is not palindrome';
}

console.log(palindrome('8790978'))
