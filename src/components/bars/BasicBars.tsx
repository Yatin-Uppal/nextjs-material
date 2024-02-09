"use client"
import { BarChart } from '@mui/x-charts/BarChart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "./BasicBars.css"
import { Divider } from '@mui/material';

export default function BasicBars() {
  return (
    <div className='bar'>
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5], color: "#fff" }, { data: [1, 6, 3], color: "#fff" }, { data: [2, 5, 6], color: "#fff" }]}
      width={400}
      height={250}
      sx={{backgroundColor: "#ff7e00bd", border: "none", borderRadius: "20px"}}
    />
    <div className='bar_footer'>
    <div>Completed Tasks</div>
    <p style={{color: "#949494"}}>Last Campaign Performance</p>
    <hr/>
    <p><AccessTimeIcon style={{fontSize:"15px"}}/> Campaign sent 2 days ago</p>
    </div>
    </div>

  );
}