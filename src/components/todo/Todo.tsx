'use client';
import BugReportIcon from '@mui/icons-material/BugReport';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloudIcon from '@mui/icons-material/Cloud';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { Checkbox } from '@mui/material';
import Divider from '@mui/material/Divider';
import './Todo.css';
const Todo = () => {
  const data = [
    'Sign Contract for What are conference organizers are afraid of?',
    'Lines from Great Russian Literature? Or E-mails From My Boss?',
    'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
    'Create 4 Invisible User Experiences you Never Knew About',
  ];

  return (
    <>
      <div className="todo">
        <div className="todo_navbar">
          <div>Tasks:</div>
          <div
            style={{
              position: 'relative',
              backgroundColor: '#9e65d3',
              padding: '5px 5px 5px 30px',
              borderRadius: '5px',
            }}
          >
            <span>
              <BugReportIcon sx={{ position: 'absolute', left: '-0.5px' }} />
            </span>
            Bugs
          </div>
          <div style={{ position: 'relative' }}>
            <span>
              <KeyboardArrowLeftIcon sx={{ position: 'absolute', left: '-30px' }} />
              <KeyboardArrowRightIcon sx={{ position: 'absolute', left: '-20px' }} />
            </span>{' '}
            Website
          </div>
          <div style={{ position: 'relative', padding: '5px' }}>
            <span>
              <CloudIcon sx={{ position: 'absolute', left: '-26px' }} />
            </span>{' '}
            Server
          </div>
        </div>
        <div style={{ marginTop: '30px' }}>
          {data.map((item) => {
            return (
              <ul>
                <li style={{ padding: '8px', listStyle: 'none', display: 'flex' }}>
                  <span>
                    <Checkbox />
                  </span>
                  <span style={{ width: '80%' }}>{item}</span>
                  <span style={{ marginLeft: 'auto' }}>
                    <EditIcon sx={{ color: '#9242db' }} />
                    <CloseIcon sx={{ color: 'red' }} />
                  </span>
                </li>
                <hr />
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
