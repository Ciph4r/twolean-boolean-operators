/********************
 * YOUR CODE BELOW! *
 ********************/
moreThan5=(num) => {
return num > 5
}

topScore = (score,topScore) => {
return score > topScore
}

isInDanger = (grade) => {
return grade >= 60 && grade <= 71
}

isCoasting = (grade) => {
return grade >= 72 && grade <= 83
}

isSucceeding = (grade) => {
return grade >=84 && grade <= 92
}

isFailing = (grade) => {
return grade < 60
}

isAcing = (grade) => {
return grade > 92
}

isStudent = (role) => {
return role === 'student'
}

isTeacher = (role) => {
return role === 'teacher'
}

isAdmin = (role) => {
return role === 'admin'
}

isElementary = (school) => {
return school === 'elementary'
}
isMiddleSchoolTeacher = (str,num) => {
  return str === 'teacher' && num >= 6 && num <= 8
}

notAnElementarySchoolAdministrator = (str,str2) => {
return str !== 'elementary' || str2 !== 'admin'
}

differentPeople = (name,name2) => {
return name !== name2 
}
/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof topScore === 'undefined') {
  topScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}

if (typeof differentPeople === 'undefined') {
  differentPeople = undefined;
}


module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
  differentPeople,
}