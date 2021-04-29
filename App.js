import React, {useState} from 'react';
import ThemeContext from './src/context/themeContext';
import HomeStack from './src/routes/HomeStack';

const App = () => {
  const [mode, setMode] = useState('pink');

  const changeMode = () => {
    setMode(prevMode => {
      let newMode;
      prevMode === 'pink' ? (newMode = 'white') : (newMode = 'pink');
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{mode, changeMode}}>
      <HomeStack />
    </ThemeContext.Provider>
  );
};

export default App;
