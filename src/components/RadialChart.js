import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import styled from "styled-components";

const ChartWrapper = styled.div`
  height: 300px;
  width: 300px;
  background: #fbfbfb;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.45);
  border-radius: 5px;
`;

const Title = styled.h2`
  font-size: 1.25em;
  color: #20253a;
  opacity: 0.9;
  position: absolute;
  width: 200px;
  margin-left: 1.5em;
`;

const circleSize = 300;

const sub = 270;

/**
 * Component for showing user details in the form of radial graph.
 *
 * @component
 * @example
 *
 * displays user progress
 *
 * return (
 * <ObjectiveRadialChart score={todayScore} />
 * )
 *
 */

const ObjectiveRadialChart = ({ score }) => {
  /** @constant
   * @type {object}
   * @param {number} - score
   * @default
   */
  const data = [
    {
      name: "percentage",
      value: score,
    },
  ];

  return (
    <ChartWrapper>
      <Title>Score</Title>
      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart
          width={circleSize}
          height={circleSize}
          cx={circleSize / 2}
          cy={circleSize / 2}
          innerRadius={110}
          outerRadius={170}
          barSize={12}
          data={data}
          startAngle={90 - sub}
          endAngle={-270 - sub}>
          <PolarAngleAxis
            type='number'
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            clockWise
            dataKey='value'
            cornerRadius={circleSize / 2}
            stroke={10}
            fill='#e60000'
          />
          <text
            x={circleSize / 2}
            y={circleSize / 2}
            style={{ fontSize: 18, stroke: "#20253a" }}
            width='25'
            textAnchor='middle'
            dominantBaseline='middle'
            className='progress-label'>
            {score}% de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

export default ObjectiveRadialChart;

ObjectiveRadialChart.propTypes = {
  /**
   * API Endpoint
   */
  score: PropTypes.number,
};
