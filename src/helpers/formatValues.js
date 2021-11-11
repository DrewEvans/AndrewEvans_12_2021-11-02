/**
 * Converts value to string including "min".
 * @property {object} toolTipProps -Formatter function of value in tooltip. If you return an array, the first entry will be the formatted "value", and the second entry will be the formatted "name"
 * @param {value}
 * @return {String} Returns value as string
 */

export const formatTimeValue = (value, name, props) => {
  return ["", `${value}min`];
};

/**
 * Converts value to string
 *
 * @property {value} tickItem -The formatter function of tick.
 * @param {number}
 * @return {String} Returns value as string
 */

export const formatKindValue = (tickItem) => {
  if (tickItem === 1) {
    return "cardio";
  }
  if (tickItem === 2) {
    return "energy";
  }
  if (tickItem === 3) {
    return "endurance";
  }
  if (tickItem === 4) {
    return "strength";
  }
  if (tickItem === 5) {
    return "speed";
  }
  if (tickItem === 6) {
    return "intensity";
  }
};
