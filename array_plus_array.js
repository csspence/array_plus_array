/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. 
I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

const arrayPlusArray = (arr1, arr2) => {
  let answer = 0;
  for(let i = 0; i < arr1.length; i++) {
    answer += arr1[i];
  }

  for(let j = 0; j < arr2.length; j++) {
    answer += arr2[j];
  }

  return answer;
}