import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { formatKindValue, customizedLabel } from "../helpers/formatValues";
import axios from "axios";
import { useEffect, useState } from "react";

const ChartWrapper = styled.div`
  height: 300px;
  width: 300px;
  background: #282d30;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.45);
  border-radius: 5px;
`;

const data = [
  { value: 200, kind: 1 },
  { value: 240, kind: 2 },
  { value: 80, kind: 3 },
  { value: 80, kind: 4 },
  { value: 220, kind: 5 },
  { value: 110, kind: 6 },
];

const ActivtiyRadarChart = ({ fetchUrl }) => {
  const [userPerformance, setUserPerformance] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setUserPerformance(request.data.data.data);
      return request;
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ChartWrapper>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={userPerformance}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey='kind'
            tick={customizedLabel}
            tickFormatter={formatKindValue}
          />
          <PolarRadiusAxis axisLine={false} stroke='#282d30' label={false} />
          <Radar
            name='Radar'
            dataKey='value'
            stroke='#FF0101'
            fill='#FF0101'
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

export default ActivtiyRadarChart;
