/**
 * Converts a day number to a 'd' string.
 *@function
 * @param {Number} dayIndex
 * @return {String} Returns day as string
 */

export const GetDayNameByOrder = (tickItem) => {
  if (tickItem === 1) {
    return "L";
  }
  if (tickItem === 2) {
    return "M";
  }
  if (tickItem === 3) {
    return "M";
  }
  if (tickItem === 4) {
    return "J";
  }
  if (tickItem === 5) {
    return "V";
  }
  if (tickItem === 6) {
    return "S";
  }
  if (tickItem === 7) {
    return "D";
  }
};

/**
 * Converts a day number to a 'ddd'string.
 *@function
 * @param {Number} dayIndex
 * @return {String} Returns day as string
 */
export const GetShortDayNameByOrder = (tickItem) => {
  if (tickItem === 1) {
    return "Lun";
  }
  if (tickItem === 2) {
    return "Mar";
  }
  if (tickItem === 3) {
    return "Mer";
  }
  if (tickItem === 4) {
    return "Jeu";
  }
  if (tickItem === 5) {
    return "Ven";
  }
  if (tickItem === 6) {
    return "Sam";
  }
  if (tickItem === 7) {
    return "Dim";
  }
};
