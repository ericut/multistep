import { extendTheme } from '@chakra-ui/react';

import styles from './styles';
import Button from './components/button';

const MultiStepTheme = extendTheme({
  styles,
  components: {
    Button,
  },
});

export default MultiStepTheme;
