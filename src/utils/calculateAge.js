export const calculateAge = (birthday) => {
  var ageDif = Date.now() - new Date(birthday).getTime();
  var ageDate = new Date(ageDif);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
