import {
  LineChart,
  YAxis,
  XAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import {
  GetDayNameByOrder,
  GetShortDayNameByOrder,
} from "../helpers/getDayNameByOrder";
import { formatTimeValue } from "../helpers/formatValues";
import { useState, useEffect } from "react";
import PropType from "prop-types";
import axios from "axios";
import styled from "styled-components";

const ChartWrapper = styled.div`
  height: 300px;
  width: 300px;
  background: rgb(247, 59, 59);
  background: linear-gradient(
    36deg,
    rgba(247, 59, 59, 0.9920343137254902) 0%,
    rgba(230, 0, 0, 1) 100%
  );
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.45);
  border-radius: 5px;
`;

const Title = styled.h2`
  font-size: 1.25em;
  color: #fff;
  mix-blend-mode: normal;
  opacity: 0.5;
  position: absolute;
  width: 200px;
  margin-left: 1.5em;
`;

/**
 * Component for showing user details in the form of line chart.
 *
 * @component
 * @example
 *
 * displays user sessions
 *
 * return (
 * <LineChartDuration fetchUrl={url} />
 * )
 *
 */

const LineChartDuration = ({ fetchUrl }) => {
  /**
   * @typedef {Object} userSessions
   */

  /**
   * @callback userSessions
   * @param {userSessions} state
   * @returns {void}
   */

  /**
   * @namespace {Object}
   * @property {userSessions} null
   * @property {userSessions} object
   */
  const [userSessions, setUserSessions] = useState();

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
      setUserSessions(request.data.data.sessions);
      return request;
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {userSessions && (
        <ChartWrapper id='lineChart'>
          <Title>Durée moyenne des sessions</Title>
          <ResponsiveContainer>
            <LineChart width='300' height='300' data={userSessions}>
              <XAxis
                dataKey='day'
                tickLine={false}
                tickFormatter={GetDayNameByOrder}
                stroke='#FFFFFF'
                axisLine={false}
                height={35}
                padding={{ left: 0, right: 5 }}
              />
              <YAxis
                dataKey='sessionLength'
                display='none'
                domain={[
                  "auto",
                  Math.max(...userSessions.map((x) => x.sessionLength)) +
                    2 +
                    25,
                ]}
                width={5}
                tickCount={7}
                tickLine={false}
              />
              <Line
                type='monotone'
                dataKey='sessionLength'
                stroke='#FFFFFF'
                width={5}
                strokeWidth={2}
                dot={false}
              />
              <Tooltip
                cursor={{ opacity: 0.3, strokeWidth: 2 }}
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  color: "#000000",
                  border: "none",
                  borderRadius: "6px",
                }}
                itemStyle={{ color: "#000", fontWeight: "bold" }}
                labelFormatter={GetShortDayNameByOrder}
                formatter={formatTimeValue}
                separator=''
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartWrapper>
      )}
    </>
  );
};

export default LineChartDuration;

LineChartDuration.propType = {
  /**
   * API Endpoint
   */
  fetchUrl: PropType.string,
};
