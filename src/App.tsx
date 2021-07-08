
import { ChakraProvider } from '@chakra-ui/react';
import MultiStepTheme from './theme/index';

import MultiStepExample from './pages/MultiStepExample/MultiStepExample'

const App = () => {
  return (
    <ChakraProvider resetCSS={true} theme={MultiStepTheme}>
      <MultiStepExample/>
    </ChakraProvider>
  );
};

export default App;
