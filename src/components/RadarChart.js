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
import PropType from "prop-types";
import useFetch from "../hooks/useFetch";

const ChartWrapper = styled.div`
  height: 300px;
  width: 300px;
  background: #282d30;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.45);
  border-radius: 5px;
`;

/**
 * Component for showing user details in the form of radar chart.
 *
 * @component
 * @example
 *
 * displays user performance
 *
 * return (
 * <ActivtiyRadarChart fetchUrl={url} />
 * )
 *
 */

const ActivtiyRadarChart = ({ fetchUrl }) => {
  const { data } = useFetch(fetchUrl);

  return (
    <ChartWrapper>
      {data && (
        <ResponsiveContainer width='100%' height='100%'>
          <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data.data}>
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
      )}
    </ChartWrapper>
  );
};

export default ActivtiyRadarChart;

ActivtiyRadarChart.propType = {
  /**
   * API Endpoint
   */
  fetchUrl: PropType.string,
};
