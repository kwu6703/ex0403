/**************************************
 *  Author:         Kaixin Wu
 *  Date:           10/14/2018
 *  Description:    Ex4.3, pg. 192 of Sebesta
 * 
 * 
 *************************************/   
var a = prompt("Enter the first number:", "");
var b = prompt("Enter the second number:", "");
var c = prompt("Enter the third number:", "");


// if((a>b)&&(a>c))
// {
//     max = a;
// }
// else
// {
//     if((b>a)&&(b>c))
//     {
//     max = b;
//     }
//     else
//     {
//         if((c>a)&&(c>b))
//         {
//         max = c;
//         }
//     }
// }

var max=Math.max(a, Math.max(b,c));

documet.writeln("The maximum number is " + max);
