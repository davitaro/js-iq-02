/*
To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

Examples
progressDays([3, 4, 1, 2]) ➞ 2
// There are two progress days, (3->4) and (1->2)

progressDays([10, 11, 12, 9, 10]) ➞ 3

progressDays([6, 5, 4, 3, 2, 9]) ➞ 1

progressDays([9, 9])  ➞ 0
Notes
Running the same number of miles as last week does not count as a progress day.
*/

function progressDays(array) {
  let progressDays = 0;
  let i; 
  for (i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      // console.log(
      //   `last week he ran ${array[i - 1]} miles. This week he rain ${
      //     array[i]
      //   } miles. That's one progress day!`
      // );
      progressDays++;
    }
  }
  // console.log(`Total progress days this week: ${progressDays}`);
  return progressDays; 
  //your code
}

//progressDays([9, 9]);

exports.solution = progressDays;
