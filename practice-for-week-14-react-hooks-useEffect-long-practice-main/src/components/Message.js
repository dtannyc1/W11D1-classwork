import { useEffect, useState } from 'react';

function Message({ size, featherCount }) {
  const [sizeClass, setSizeClass] = useState("");
  const [messageString, setMessageString] = useState("");

  useEffect(() => {
    // console.log('Message', size);
    let cname = '';
    switch (size) {
      case 'm':
        cname = 'medium';
        break;
      case 'l':
        cname = 'large';
        break;
      case 'xl':
        cname = 'xlarge';
        break;
      default:
        cname = 'small';
        break;
    }
    setSizeClass(cname);
  }, [size]);

  useEffect(() => {
    let message = '';
    switch (featherCount) {
      case 0:
        message = "Oh my! Your bird is naked";
        break;
      default:
        message = "Nice feathers!"
        break;
    }
    setMessageString(message);
  }, [featherCount]);

  return (
    <div className={`message ${sizeClass}`}>
      {`${messageString}`}
    </div>
  );
};

export default Message;
