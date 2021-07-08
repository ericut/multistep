import { useEffect, useState } from 'react';
// theme + styles
import { Flex, Box } from '@chakra-ui/react';

interface IStepsControlProps {
  initialStep: number;
  maxSteps: number;
}

interface IMultiStepProps {
  registeredSteps: Array<any>;
  activeStep: number;
  goToStep: (step: number) => void;
}

export function useMultiStepForm({ initialStep, maxSteps }: IStepsControlProps) {
  const [activeStep, setActiveStep] = useState(initialStep);
  const [firstStep, setFirstStep] = useState(true);
  const [finalStep, setFinalStep] = useState(false);

  useEffect(() => {
    if (activeStep === 1) {
      setFirstStep(true);
    } else {
      setFirstStep(false);
    }
    if (activeStep === maxSteps) {
      setFinalStep(true);
    } else {
      setFinalStep(false);
    }
  }, [activeStep, maxSteps]);

  const previousStep = () => {
    if (activeStep !== 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const nextStep = () => {
    if (activeStep !== maxSteps) {
      setActiveStep(activeStep + 1);
    }
  };

  const resetSteps = () => {
    setActiveStep(initialStep);
  };

  const goToStep = (step: number) => {
    setActiveStep(step);
  };

  return { nextStep, previousStep, resetSteps, activeStep, firstStep, finalStep, goToStep };
}

export default function MultiStepForm({ registeredSteps, activeStep, goToStep }: IMultiStepProps) {
  const [activeStepChange, setActiveStepChange] = useState(activeStep);

  const finishedSteps = registeredSteps.length + 1;

  useEffect(() => {
    setActiveStepChange(activeStep);
  }, [activeStep]);

  function stepColorStatus(level: number) {
    if (level === activeStepChange) {
      return 'blue.500';
    } else if (level > activeStepChange) {
      return 'blue.100';
    } else if (level < activeStepChange) {
      return 'green.500';
    } else if (activeStepChange === finishedSteps) {
      return 'green.500';
    }
  }

  function stepColorStatusText(level: number) {
    if (level === activeStepChange) {
      return 'blue.500';
    } else if (level > activeStepChange) {
      return 'gray.700';
    } else if (level < activeStepChange) {
      return 'green.600';
    } else if (activeStepChange === finishedSteps) {
      return 'green.600';
    }
  }

  function stepColorBar(level: number) {
    if (level === activeStepChange - 1) {
      return 'linear(to-r, green.500, green.500, green.500, green.500, blue.500)';
    } else if (level === activeStepChange) {
      return 'linear(to-r, blue.300, blue.100, blue.100, blue.100, blue.100)';
    } else if (level < activeStepChange) {
      return 'linear(to-r, green.500, green.500)';
    } else if (level > activeStepChange) {
      return 'linear(to-r, blue.100, blue.100)';
    }
  }

  return (
    <Flex position="relative" justifyContent="space-between" w="100%" h="100%" color="blue.900">
      {registeredSteps
        .sort((a, b) => {
          if (a.level > b.level) {
            return 1;
          } else if (a.level < b.level) {
            return -1;
          } else {
            return 0;
          }
        })
        .map(({ level, label }) => {
          return (
            <>
              <Flex
                key={level}
                flexDirection="column"
                alignItems="center"
                position="relative"
                textAlign="center"
                w="200px"
                onClick={() => goToStep(level)}
              >
                <Box mt="0px" w="18px" h="18px" bg={stepColorStatus(level)} borderRadius="full" transition="0.5s all" zIndex="5"></Box>
                <Box fontSize="12px" color={stepColorStatusText(level)} fontWeight={level === activeStepChange ? 'bold' : ''}>
                  {label}
                </Box>
              </Flex>
              {level !== registeredSteps[registeredSteps.length - 1].level ? (
                <Flex mt="6px" w="200px" justifyContent="center" position="relative">
                  <Box position="absolute" w="200%" h="6px" bgGradient={stepColorBar(level)} transition="0.5s all"></Box>
                </Flex>
              ) : (
                ''
              )}
            </>
          );
        })}
    </Flex>
  );
}
