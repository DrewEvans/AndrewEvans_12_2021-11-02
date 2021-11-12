import {
  LineChart,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import {
  GetDayNameByOrder,
  GetShortDayNameByOrder,
} from "../helpers/getDayNameByOrder";
import { formatTimeValue } from "../helpers/formatValues";
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

const data = [
  { day: 1, sessionLength: 30 },
  { day: 2, sessionLength: 40 },
  { day: 3, sessionLength: 50 },
  { day: 4, sessionLength: 30 },
  { day: 5, sessionLength: 30 },
  { day: 6, sessionLength: 50 },
  { day: 7, sessionLength: 50 },
];

const LineChartDuration = () => {
  const MaxSessionLength = Math.max(...data.map((x) => x.sessionLength)) + 2;

  return (
    <>
      <ChartWrapper id='lineChart'>
        <Title>Durée moyenne des sessions</Title>
        <ResponsiveContainer>
          <LineChart width='300' height='300' data={data}>
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
              domain={["auto", MaxSessionLength + 25]}
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
    </>
  );
};

export default LineChartDuration;
