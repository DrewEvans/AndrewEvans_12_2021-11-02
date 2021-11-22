import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Label } from "recharts";
import useFetch from "../hooks/useFetch";
import PropType from "prop-types";
import styled from "styled-components";

const ChartWrapper = styled.div`
	background: #fbfbfb;
	display: flex;
	justify-content: center;
	width: 85%;
	margin: 0 auto;
	box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
`;

/**
 * Component for showing details in the form of a Bar Chart.
 *
 * @component
 * @example
 *
 * displays users Activity
 *
 * return (
 *   <ActivityBarChart fetchUrl={url} />
 * )
 */
const ActivityBarChart = ({ fetchUrl }) => {
	const { data } = useFetch(fetchUrl);

	return (
		<>
			{data && (
				<ChartWrapper id='barChart'>
					<BarChart
						width={1300}
						height={270}
						data={data.sessions}
						barGap={20}
						barCategoryGap='35%'
						margin={{
							top: 20,
							right: 100,
							left: 100,
							bottom: 20,
						}}
					>
						<XAxis dataKey='day' tickLine={false}>
							<Label
								value='Activité quotidienne'
								position='top'
								offset={200}
							/>
						</XAxis>
						<YAxis
							yAxisId='left'
							orientation='right'
							stroke='#282D30'
							type='number'
							allowDecimals={false}
							axisLine={false}
							tickLine={false}
							domain={[
								"auto",
								Math.max(
									...data.sessions.map((x) => x.kilogram)
								) + 2,
							]}
							tickCount={3}
						/>
						<YAxis
							yAxisId='right'
							orientation='left'
							stroke='none'
							domain={[
								"auto",
								Math.max(
									...data.sessions.map((x) => x.calories)
								) + 2,
							]}
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
			)}
		</>
	);
};

export default ActivityBarChart;

ActivityBarChart.propType = {
	/**
	 * API Endpoint
	 */
	fetchUrl: PropType.string,
};
