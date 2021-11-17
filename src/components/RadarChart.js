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
  /**
   * @typedef {Object} userPerformance
   */

  /**
   * @callback userPerformance
   * @param {userPerformance} state
   * @returns {void}
   */

  /**
   * @namespace {Object}
   * @property {userPerformance} null
   * @property {userPerformance} object
   */
  const [userPerformance, setUserPerformance] = useState();

  useEffect(() => {
    /**
     * Download data from the specified URL.
     *
     * @async
     * @function fetchUrl
     * @param {string} url - The URL to fetch from.
     * @return {Promise<string>} The data from the URL.
     */
    async function fetchData() {
      /** @constant
       * @type {string}
       * @default
       */
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

ActivtiyRadarChart.propType = {
  /**
   * API Endpoint
   */
  fetchUrl: PropType.string,
};
