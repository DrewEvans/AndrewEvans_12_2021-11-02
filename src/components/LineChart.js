import {
  LineChart,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const ChartWrapper = styled.div`
  height: 300px;
  width: 300px;
  background-color: red;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.02);
  border-radius: 5px;
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
  console.log(data);

  const MaxSessionLength = Math.max(...data.map((x) => x.sessionLength)) + 2;

  return (
    <>
      <ChartWrapper id='lineChart'>
        <ResponsiveContainer>
          <LineChart width='300' height='300' data={data}>
            <XAxis
              dataKey='day'
              tickLine={false}
              stroke='#FFFFFF'
              axisLine={false}
              height={35}
            />
            <YAxis
              dataKey='sessionLength'
              display='none'
              domain={["auto", MaxSessionLength]}
              width={0}
              tickCount={7}
              tickLine={false}
            />
            <Line
              type='monotone'
              dataKey='sessionLength'
              stroke='#FFFFFF'
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
            />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </>
  );
};

export default LineChartDuration;
