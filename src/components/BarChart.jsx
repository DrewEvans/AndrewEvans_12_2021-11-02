import * as d3 from "d3";
import { useRef , useEffect} from "react";
import styled from "styled-components";

const ChartWrapper = styled.div`
background: #FBFBFB;
display: flex;
justify-content: center;
margin: 2.5em 10em;
width: 80%;
height: 50%;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
border-radius: 5px;
`;

const data = [ 
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
  }
];

export const BarChart = ({weight, calsBurned}) => {
    const d3Chart = useRef();
    
    useEffect(()=>{
        const svg = d3.select(d3Chart.current)
        
        svg
        .selectAll('circle')
        .data(weight)
        .join(
            enter => enter.append("rect"),               
            update => update.attr("class", "updated"),
            exit => exit.remove()
        )
        .attr("width", "50")
        .attr("height", value => value * 20)
        .attr("stroke", "red")
        .attr("fill", "red");
    
        console.log(svg)
    
        // eslint-disable-next-line
    },[]);
    
    
   
  

    return <>
        <ChartWrapper id="barChart">
            <svg ref={d3Chart}>
            </svg>
        </ChartWrapper>
    </>
}