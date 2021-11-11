import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { formatKindValue } from "../helpers/formatValues";

const ChartWrapper = styled.div`
  height: 300px;
  width: 300px;
`;

const data = [
  { value: 200, kind: 1 },
  { value: 240, kind: 2 },
  { value: 80, kind: 3 },
  { value: 80, kind: 4 },
  { value: 220, kind: 5 },
  { value: 110, kind: 6 },
];

const ActivtiyRadarChart = () => {
  return (
    <ChartWrapper>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey='kind' tickFormatter={formatKindValue} />
          <PolarRadiusAxis />
          <Radar
            name='Radar'
            dataKey='value'
            stroke='#8884d8'
            fill='#8884d8'
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

export default ActivtiyRadarChart;
