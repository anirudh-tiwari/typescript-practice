let data = ["anirudh", "23"];
data.push(9);  //number can't go to array of strings
data.push("9"); // No issue

let data2 = ["anirudh", "23",9];
data2.push(9);  //now it is valid. 
data2.push(true);   //boolean can't go to array of strings & number

let data3 = ["anirudh", "23"];
data3[2] = true;  // Type 'boolean' is not assignable to type 'string'.
data3[2] = "true";  // Type 'boolean' is not assignable to type 'string'.


let data4: string[]  = ["anirudh", "23"];
data3[2] = "true";
