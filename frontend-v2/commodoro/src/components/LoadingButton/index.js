import React, {useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import "./LoadingButton.scss"

function simulateNetworkRequest() {
    return new Promise(resolve => setTimeout(resolve, 500));
  }
  
  function LoadingButton({appendInfo, name}) {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => {
      setLoading(true);
      appendInfo(name);
    }
  
    return (
      <Button
        variant="secondary"
        className="btn-loading main"
        size="sm"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        block active
      >
        {isLoading ? 'Loading…' : 'Add another'}
      </Button>
    );
}

export default LoadingButton;