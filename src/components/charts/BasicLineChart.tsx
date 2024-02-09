"use client"
import { LineChart } from '@mui/x-charts/LineChart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "./BasicLineChart.css"

export default function BasicLineChart() {
  return (
    <div className='line-chart'>
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          color: '#fff'
        },
      ]}
      width={400}
      height={250}
      sx={{color: '#fff', backgroundColor: "#5DBB63", border: "none", borderRadius: "20px", width: "50%"}}
    />
    <div className='line_chart_footer'>
    <div>Daily Sales</div>
    <p><span style={{color: "green"}}>&uarr;</span><span style={{color: "green"}}> 55%</span> <span style={{color: "#959595"}}>increase in today sales</span></p>
    <hr/>
    <p><AccessTimeIcon style={{fontSize:"15px"}}/> Updated 4 minutes ago</p>
    </div>
    </div>
  );
}