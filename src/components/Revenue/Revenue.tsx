import './Revenue.css';
import HouseIcon from '@mui/icons-material/House';
import DateRangeIcon from '@mui/icons-material/DateRange';
const Revenue = () => {
  return (
    <>
      <div className="revenue_main">
        <p
          style={{
            padding: '20px',
            background: 'red',
            display: 'inline-block',
            position: 'absolute',
            top: '-17px',
            left: '10px',
            backgroundColor: '#42b546',
            color: '#fff',
            borderRadius: '5px',
          }}
        >
          <HouseIcon />
        </p>
        <p
          style={{
            position: 'absolute',
            right: '9px',
            top: '16px',
            color: '#0000005c',
          }}
        >
          Revenue
        </p>
        <p
          style={{
            position: 'absolute',
            right: '10px',
            top: '42px',
            fontSize: 'x-large',
          }}
        >
          $34,245
        </p>
        <p
          style={{
            position: 'absolute',
            left: '10px',
            bottom: '12px',
            color: '#000000a8',
          }}
        >
          <hr style={{ position: 'absolute', width: '100%', height: '2px', top: '-12px', left: '10px' }} />
          <span
            style={{
              position: 'absolute',
              top: '-4px',
            }}
          >
            <DateRangeIcon />
          </span>
          <span
            style={{
              marginLeft: '32px',
            }}
          >
            Last 24 Hours
          </span>
        </p>
      </div>
    </>
  );
};

export default Revenue;
