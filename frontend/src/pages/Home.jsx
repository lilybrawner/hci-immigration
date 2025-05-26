import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';

function Home() {
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer) {
        navigate(`/${answer.toLowerCase()}`);
      }
  };

  return (
    <div>
      <div style={{ padding: '50px', margin: '0 auto' }}>
        <h1 style={{ marginTop: 0 }}>
          DISCLAIMER
        </h1>
        <p>
          This tool is not intended to be a replacement for a qualified immigration attorney. 
          All information we are presenting is publicly accessible from US government websites and other reliable sources. 
          This tool is not endorsed by UCLA. It is for informational purposes and for a class project.
        </p>
      </div>
      <div className='home-form'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user">
            Hi! I am a  
          </label>
          <select
            id="user"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            style={{ marginLeft: '8px' }}
          >
            <option value="">Select</option>
            <option value="Spouse">U.S. citizen looking to sponsor my spouse</option>
            <option value="ParentA">U.S. citizen looking to sponsor my parents living in the US</option>
            <option value="ParentC">U.S. citizen looking to sponsor my parents living abroad</option>
            <option value="Visa">International student looking to study in the U.S.</option>
            <option value="Greencard">Green card holder looking to apply for citizenship</option>
          </select>
          <br />
          <div className="btn-holder" style={{ marginTop: '20px' }}>
            <IconButton
              type="submit"
              sx={{
                backgroundColor: '#425E8E',
                color: 'white',
                width: '150px',
                height: '50px',
                borderRadius: 7,
                "&:hover": {
                  backgroundColor: '#425E8E'
                }
              }}
              disabled={!answer}
              aria-label="Continue"
            >
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;