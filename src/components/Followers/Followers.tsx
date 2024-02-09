import './Followers.css';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import UpdateIcon from '@mui/icons-material/Update';
const Followers = () => {
  return (
    <>
      <div className="followers_main">
        <p
          style={{
            padding: '20px',
            background: 'red',
            display: 'inline-block',
            position: 'absolute',
            top: '-17px',
            left: '10px',
            backgroundColor: '#3e90bc',
            color: '#fff',
            borderRadius: '5px',
          }}
        >
          <AccessibilityIcon />
        </p>
        <p
          style={{
            position: 'absolute',
            right: '9px',
            top: '16px',
            color: '#0000005c',
          }}
        >
          Followers
        </p>
        <p
          style={{
            position: 'absolute',
            right: '10px',
            top: '42px',
            fontSize: 'x-large',
          }}
        >
          +245
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
            <UpdateIcon />
          </span>
          <span
            style={{
              marginLeft: '32px',
            }}
          >
            Just Updated
          </span>
        </p>
      </div>
    </>
  );
};

export default Followers;
