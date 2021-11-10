import { maxIndex } from "d3-array";
import { useRef } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import styled from "styled-components";

const ChartWrapper = styled.div`
  background: #fbfbfb;
  display: flex;
  justify-content: center;
  width: 75%;
  margin: 0 auto;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.02);
  border-radius: 5px;
`;

const DATASET = [
  {
    day: "2020-07-01",
    kilogram: 70,
    calories: 240,
  },
  {
    day: "2020-07-02",
    kilogram: 69,
    calories: 220,
  },
  {
    day: "2020-07-03",
    kilogram: 70,
    calories: 280,
  },
  {
    day: "2020-07-04",
    kilogram: 70,
    calories: 500,
  },
  {
    day: "2020-07-05",
    kilogram: 69,
    calories: 160,
  },
  {
    day: "2020-07-06",
    kilogram: 69,
    calories: 162,
  },
  {
    day: "2020-07-07",
    kilogram: 69,
    calories: 390,
  },
];

const ActivityBarChart = () => {
  const ref = useRef();

  const minKilos = Math.min(...DATASET.map((x) => x.kilogram)) - 1;
  const MaxKilos = Math.max(...DATASET.map((x) => x.kilogram)) + 2;
  const minCals = Math.min(...DATASET.map((x) => x.calories)) - 1;
  const MaxCals = Math.max(...DATASET.map((x) => x.calories)) + 2;

  console.log(ref);
  return (
    <>
      <ChartWrapper id='barChart'>
        <BarChart
          ref={ref}
          width={1300}
          height={270}
          data={DATASET}
          barGap={20}
          barCategoryGap='35%'
          margin={{
            top: 20,
            right: 100,
            left: 100,
            bottom: 20,
          }}>
          <XAxis dataKey='day'>
            <Label value='Activité quotidienne' position='top' offset={200} />
          </XAxis>
          <YAxis
            yAxisId='left'
            orientation='right'
            stroke='#282D30'
            type='number'
            allowDecimals={false}
            axisLine={false}
            tickLine={false}
            domain={["auto", MaxKilos]}
            tickCount={3}
          />
          <YAxis
            yAxisId='right'
            orientation='left'
            stroke='none'
            domain={["auto", MaxCals]}
            tickCount={5}
          />
          <Bar
            yAxisId='left'
            dataKey='kilogram'
            name='Poids (kg)'
            fill='#282D30'
            color='white'
            legendType='circle'
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId='right'
            dataKey='calories'
            name='Calories brûlées (kCal)'
            fill='#E60000'
            legendType='circle'
            radius={[10, 10, 0, 0]}
          />
          <Tooltip
            cursor={{ opacity: 0.3, strokeWidth: 2 }}
            contentStyle={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "6px",
            }}
            itemStyle={{ color: "white" }}
          />
          <Legend
            wrapperStyle={{ top: "0%" }}
            verticalAlign='top'
            align='right'
          />
        </BarChart>
      </ChartWrapper>
    </>
  );
};

export default ActivityBarChart;
