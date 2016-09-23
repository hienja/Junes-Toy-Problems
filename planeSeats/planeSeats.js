/*
When on a long flight, it is often helpful to be in an aisle seat (a seat adjacent 
to an aisle). This way you don't need to bother another passenger when you need to
go to the restroom or take a walk. However, because large airliners are built to hold
as many passengers as possible, only a limited number of seats can be aisle seats.

A typical arrangement of 10 seats in a single row with 2 aisles is as follows:
ssa_assa_ass

Aisle seats are represented as ‘a’, the aisle is represented as ‘_’ and the remaining seats are ’s’.

Implement a function that will take in 2 numbers, the lenght of a single row and the
amount of seats needed. All of the seats are equally wide and each aisle has the same
width as a single seat. Return the arrangement of the seats that maximizes aisle seats
in the form of a string where seats and aisles are represented by 's' and '_' respectively.
If there are multiple arrangements, find the smallest lexicographical arrangement (the
'_' character before 's' in the lexicographical order).


Examples:
planeSeats(6, 3) //=> returns "__ss_s" 
All three seats can be made aisle seats and this is the smallest lexicographical arrangement.

planeSeats(6, 4) //=> returns "s_ss_s"
This is the only arrangement where all four seats are aisle seats.

planeSeats(12, 10) //=> returns "s_ss_sssssss"
There are many arrangements with the same maximum number of aisle seats, but this one is lexicographically smaller.

planeSeats(11, 7) //=> returns "_ss_ss_ss_s" 
*/

var planeSeats = function(/*argument(s)*/) {
};