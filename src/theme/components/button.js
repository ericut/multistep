const Button = {
  baseStyle: {
    color: 'blue.900',
    fontFamily: 'Roboto',
  },
  sizes: {
    md: {
      fontSize: '16px',
      fontWeight: 'bold',
      padding: '0px 60px',
      height: '50px',
      borderRadius: '6px',
      boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.05)',
    },
    sm: {
      fontSize: '14px',
      fontWeight: '500',
      padding: '5px 17px',
      height: '40px',
      borderRadius: '6px',
      boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.05)',
    },
  },
  variants: {
    outline: (props) => ({
      color: 'blue.500',
      border: '2px solid',
      borderColor: props.color ? props.color : 'blue.500',
      _hover: {
        color: 'white',
        bg: props.color ? props.color : 'blue.700',
        opacity: 0.75,
        boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.25)',
      },
      _active: {
        bg: props.color ? props.color : 'blue.900',
        opacity: 0.9,
      },
      _focus: {
        boxShadow: '0 0 1px 2px rgba(0, 0, 0, .05), 0 1px 1px rgba(0, 0, 0, .15)',
      },
    }),
    solid: (props) => ({
      color: 'white',
      bg: props.bg ? props.bg : 'blue.500',
      _hover: {
        bg: props.bg ? props.bg : 'blue.400',
        opacity: 1,
        boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.25)',
      },
      _active: {
        bg: props.bg ? props.bg : 'blue.600',
        opacity: 0.9,
      },
      _focus: {
        boxShadow: '0 0 1px 2px rgba(0, 0, 0, .05), 0 1px 1px rgba(0, 0, 0, .15)',
      },
    }),
    iconnavbar: (props) => ({
      fontSize: '18px',
      padding: '0px',
      bg: props.bg ? 'rgba(0, 0, 0, .0)' : 'rgba(0, 0, 0, .0)',
      _hover: {
        fontSize: '18px',
        color: 'white',
        bg: props.color !== 'white' ? props.color : 'blue.700',
        boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.15)',
      },
    }),
    actionbutton: (props) => ({
      fontSize: '18px',
      bg: props.bg ? 'rgba(0, 0, 0, .0)' : 'rgba(0, 0, 0, .0)',
      padding: '0px',
      boxShadow: 'none',
      height: '30px',
      minWidth: '30px',
      _hover: {
        fontSize: '18px',
        color: 'white',
        bg: props.color !== 'white' ? props.color : 'blue.700',
      },
    }),
    bigactionbutton: (props) => ({
      fontSize: '18px',
      bg: props.bg ? 'rgba(0, 0, 0, .0)' : 'rgba(0, 0, 0, .0)',
      padding: '0px',
      boxShadow: 'none',
      height: '40px',
      minWidth: '30px',
      _hover: {
        fontSize: '18px',
        color: 'white',
        bg: props.color !== 'white' ? props.color : 'blue.700',
      },
    }),
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};

export default Button;
