import {
  RadialBarChart,
  RadialBar,
  Legend,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
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

const data = [
  {
    userInfo: { firstName: "Cecilia", lastName: "Ratorez", age: 34 },
    score: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120,
    },
  },
];

const objective = [
  {
    name: "percentage",
    value: 55,
  },
];
let score = [100];

for (const iterator of data) {
  //   score = iterator.score;
}
const circleSize = 300;
const sub = 270;

const ObjectiveRadialChart = () => {
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
          data={objective}
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
            scalToFit={true}
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
