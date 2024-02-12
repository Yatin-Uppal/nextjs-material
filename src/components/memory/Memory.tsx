import './Memory.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WarningIcon from '@mui/icons-material/Warning';
import { Divider } from '@mui/material';
const Memory = () => {
  return (
    <>
      <div className="memory_main">
        <p
          style={{
            padding: '20px',
            background: 'red',
            display: 'inline-block',
            position: 'absolute',
            top: '-17px',
            left: '10px',
            backgroundColor: '#ff7e00',
            color: '#fff',
            borderRadius: '5px',
          }}
        >
          <ContentCopyIcon />
        </p>
        <p
          style={{
            position: 'absolute',
            right: '9px',
            top: '16px',
            color: '#0000005c',
          }}
        >
          Used Space
        </p>
        <p
          style={{
            position: 'absolute',
            right: '10px',
            top: '42px',
            fontSize: 'x-large',
          }}
        >
          49/50 <span style={{ color: '#0000007d' }}> GB</span>
        </p>
        <p
          style={{
            position: 'absolute',
            left: '10px',
            bottom: '12px',
            color: 'red',
          }}
        >
          <hr style={{ position: 'absolute', width: '100%', height: '2px', top: '-12px', left: '10px' }} />
          <span
            style={{
              position: 'absolute',
              top: '-4px',
            }}
          >
            <WarningIcon />
          </span>
          <span
            style={{
              marginLeft: '32px',
              color: '#b522ba',
            }}
          >
            Get more space
          </span>
        </p>
      </div>
    </>
  );
};

export default Memory;
