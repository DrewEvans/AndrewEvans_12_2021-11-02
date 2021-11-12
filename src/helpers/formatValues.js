/**
 * Converts value to string including "min".
 * @function
 * @property {object} toolTipProps -Formatter function of value in tooltip. If you return an array, the first entry will be the formatted "value", and the second entry will be the formatted "name"
 * @param {value} - The value from the xAxis displayed in the legend
 * @return {String} Returns value as string
 */

export const formatTimeValue = (value) => {
  return ["", `${value}min`];
};

/**
 * Converts value to string
 * @function
 * @property {value} tickItem -The formatter function of tick.
 * @param {number} -The value from the xAxis
 * @return {String} Returns value as string
 */

export const formatKindValue = (tickItem) => {
  if (tickItem === 0) {
    return "Cardio";
  }
  if (tickItem === 1) {
    return "Energie";
  }
  if (tickItem === 2) {
    return "Endurance";
  }
  if (tickItem === 3) {
    return "Force";
  }
  if (tickItem === 4) {
    return "Vitesse";
  }
  if (tickItem === 5) {
    return "Intensité";
  }
};

/**
 * Set object Properties from Radar Chat Component
 *@function
 * @property {object} Props -If object set, ticks will be drawn which have the props mergered by the internal calculated props and the option.
 * @param {number} props.x -The Coordinates of X
 * @param {number} props.y -The Coordinates of y
 * @param {number} props.index -The value name
 * @return {props} Returns props defined in function
 */
export const customizedLabel = (props) => {
  const { x, y, index } = props;

  return (
    <g>
      <text x={x} y={y} textAnchor='middle' fill='#fff' fontSize={18}>
        {formatKindValue(index)}
      </text>
    </g>
  );
};
