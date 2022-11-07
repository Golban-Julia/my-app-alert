import Button from "./components/Button";
import Alert from "./components/Alert";

import { useState } from 'react';

const App = () => {
  
  const [isOpenedAlert, setOpenedAlert] = useState(false);

  const handleOpen = () => setOpenedAlert(true);
  
  const handleClose = () =>setOpenedAlert(false);
    
  return (
    <>
      <div>
        <Button color="primary">Primary button</Button>
        <Button color="primary" size="large">Primary large button</Button>
        <Button color="secondary">Secondary button</Button>
        <Button color="primary" disabled>Disabled button</Button>
      </div>
        
      <div>

        <button onClick={handleOpen}>Open alert</button>

        {isOpenedAlert && <Alert color="primary" onClose={handleClose}>
          Join Tripma today and save up to 20% on your flight using code TRAVEL at checkout. Promotion valid for new users only.
        </Alert>}

        {isOpenedAlert && <Alert color="error" onClose={handleClose}>
          Trimpa is currently experiencing an outage. We appreciate your patience. Stay up to date at status.tripma.com.
        </Alert>}

        {isOpenedAlert && <Alert color="warning" onClose={handleClose}>
          Tripma will be undergoing routine maintenance in 30 minutes. We expect this to take no longer than 15 minutes. Stay up to date at status.tripma.com.
        </Alert>}

      </div>
    </>
  );
};

export default App;
