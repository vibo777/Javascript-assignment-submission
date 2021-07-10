//Assignment Question 1)  Fizzbuzz Problem 

// solution 
n3 = 0; 
n5 = 0; 
for(i = 1; i<=100; i++){
    s = "";
    n3++;
    n5++;
    if(n3==3){
        s = s+"fizz";
        n3 = 0;
    }
    if(n5==5){
        s = s+"Buzz";
        n5 = 0;
    }
    if(s == ""){
        console.log(i);
    }
    else{
        console.log(s);
    }
}

// Assignment question 2) find palindrome words in a given string.

// solution :

s = "madam is walking with her dad and mom";
s = s+ " ";
word = "";
revword = "";
for(k of s){
    if(k != " "){
        word = word + k;
        revword = k + revword;
    }
    else{
        if(word == revword){
            console.log(word)
        }
        word = ""
        revword = ""
    }
}
