/*
There is a hypothesis floating around that SAT score is a strong indicator of GPA. Your
task is to provide the strongest counter example for this hypothesis. Given a data set of
(sat, gpa) for the final year of a group of students, devise an algorithm to construct the
longest sequence of (sati, gpai) of students with progressively better SAT scores, and 
progressively worse gpa’s
i.e.  sat1 < sat2 < … < satk,
      gpa1 > gpa2 > … > gpak 
***Assume SAT scores and gpa’s are unique

Example:
dataset = [{name: 'Bob', SAT: 1400, GPA: 3.5}, 
  {name: 'Steven', SAT: 1600, GPA: 4.0}, 
  {name: 'Tony', SAT: 1500, GPA: 3.2}, 
  {name: 'John', SAT: 1450, GPA: 3.3}];
longestMonotonicSequence(dataset) = ['Bob', 'John', 'Tony'];
*/

var longestMonotonicSequence = function (/*argument(s)*/) {
};