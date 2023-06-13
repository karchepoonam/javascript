


function isPalindrome(str){
    const strLength= str.length;
    for(i=0;i<strLength/2;i++){
        if(str[i]!==str[strLength-1-i]){
            console.log(str+" is not Palindrome");
            return; 
        }
    }
    console.log(str+" is Palindrome");
}

isPalindrome("madam");
isPalindrome(141);
isPalindrome("sunday");
isPalindrome("mom");
isPalindrome("dad");
isPalindrome("listen");
