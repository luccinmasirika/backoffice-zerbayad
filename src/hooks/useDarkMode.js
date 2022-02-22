import { useState } from 'react';

export default function useDarkmode() {
  const [mode, setMode] = useState('');

  const toggleMode = theme => {
    setMode(theme);
  };

//   useEffect(() => {
//     setBodyCssClass(mode);
//   }, [mode]);

  return [mode, toggleMode];
}