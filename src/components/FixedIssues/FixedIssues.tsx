import './FixedIssues.css';
import InfoIcon from '@mui/icons-material/Info';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
const FixedIssues = () => {
  return (
    <>
      <div className="fixed_issues">
        <p
          style={{
            padding: '20px',
            background: 'red',
            display: 'inline-block',
            position: 'absolute',
            top: '-17px',
            left: '10px',
            backgroundColor: '#d64646',
            color: '#fff',
            borderRadius: '5px',
          }}
        >
          <InfoIcon />
        </p>
        <p
          style={{
            position: 'absolute',
            right: '9px',
            top: '16px',
            color: '#0000005c',
          }}
        >
          Fixed Issues
        </p>
        <p
          style={{
            position: 'absolute',
            right: '10px',
            top: '42px',
            fontSize: 'x-large',
          }}
        >
          75
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
            <LocalOfferIcon />
          </span>
          <span
            style={{
              marginLeft: '32px',
            }}
          >
            Tracked from Github
          </span>
        </p>
      </div>
    </>
  );
};

export default FixedIssues;
