import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

function VariantsAddonsToggle() {
  const [selectedTab, setSelectedTab] = useState('variants');

  const handleTabChange = (event, newTab) => {
    if (newTab !== null) {
      setSelectedTab(newTab);
    }
  };

  return (
    <ToggleButtonGroup
      value={selectedTab}
      exclusive
      onChange={handleTabChange}
      sx={{
        width: '100%',
        border: '1px solid #d6d6d6',
        borderRadius: '8px',
        mb: 2,
      }}
    >
      <ToggleButton
        value="variants"
        sx={{
          flex: 1,
          textAlign: 'center',
          fontSize:"16px",
          color: selectedTab === 'variants' ? 'white' : 'white',
          backgroundColor: selectedTab === 'variants' ? '#327ae6' : '#327ae6',
          border: 'none',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#327ae6',
            color: 'black',
          },
        }}
      >
        Variants (2)
      </ToggleButton>

      <ToggleButton
        value="addons"
        sx={{
          flex: 1,
          textAlign: 'center',
          fontSize:"16px",
          color: selectedTab === 'addons' ? 'white' : 'white',
          backgroundColor: selectedTab === 'addons' ? '#327ae6' :'#327ae6',
          border: 'none',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#327ae6',
            color: 'black',
          },
        }}
      >
        Add-ons
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default VariantsAddonsToggle;
