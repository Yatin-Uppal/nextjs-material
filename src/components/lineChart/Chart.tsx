'use client';
import { LineChart } from '@mui/x-charts/LineChart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './Chart.css';

export default function Chart() {
  return (
    <div className="line-3">
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            color: '#fff',
          },
        ]}
        width={400}
        height={250}
        sx={{ backgroundColor: '#d64646', border: 'none', borderRadius: '20px' }}
      />
      <div className="line_3_footer">
        <div>Completed Tasks</div>
        <p style={{ color: '#949494' }}>Last Campaign Performance</p>
        <hr />
        <p>
          <AccessTimeIcon style={{ fontSize: '15px' }} /> Campaign sent 2 days ago
        </p>
      </div>
    </div>
  );
}
