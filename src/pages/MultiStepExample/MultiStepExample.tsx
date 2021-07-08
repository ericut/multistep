import { useState, useEffect } from 'react';
// theme + styles
import { Container, Flex, Heading, Box, Button } from '@chakra-ui/react';
// components
import Header from '../../components/Header/Header';
import MultiStepForm, { useMultiStepForm } from '../../components/MultiStepForm/MultiStepForm';
// steps
import StepComponentExample from './Steps/StepComponentExample';

interface IRegistredStepProps {
  level: number;
  label: string;
}

export default function MultiStepExample() {
  // steps array
  const [registeredSteps] = useState<IRegistredStepProps[] | undefined>([
    { level: 1, label: 'Step Component Example' },
    { level: 2, label: 'Text Example' },
    { level: 3, label: 'Finished Example' },
  ]);
  // multistep hooks
  const { previousStep, nextStep, goToStep, activeStep, firstStep, finalStep } = useMultiStepForm({
    initialStep: 1,
    maxSteps: registeredSteps ? registeredSteps.length : 0,
  });

  const [pageTitle, setPageTitle] = useState('');
  const [pageSubTitle] = useState('');

  // change pagename based on its array
  useEffect(() => {
    function changePageName() {
      registeredSteps?.find(({ level, label }: IRegistredStepProps) => {
        if (level === activeStep) {
          setPageTitle(label);
        }
        return null;
      });
    }
    changePageName();
  }, [activeStep, registeredSteps]);

  const changeStepPages = () => {
    switch (activeStep) {
      case 1:
        return <StepComponentExample />;
      case 2:
        return 'Text Example';
      case 3:
        return 'Finished';
    }
  };

  function handleFinishSteps() {
    alert('Steps Finished');
  }

  return (
    <Container maxW="100%" h="100vh" p="0">
      <Header />
      <Box w="100%" h="100px" bgGradient="linear(to-tr, white, gray.100)" boxShadow="sm" px="10px">
        <Flex alignItems="center" justifyContent="space-between" h="100%" px={{ lg: '12.5%', md: '5%', sm: '5%' }}>
          <Box>
            <Heading size="md">{pageTitle}</Heading>
            <Heading size="xs">{pageSubTitle}</Heading>
          </Box>
          <Box w="60%" h="100%" pt="30px" pb="10px">
            <MultiStepForm activeStep={activeStep} registeredSteps={registeredSteps ? registeredSteps : []} goToStep={goToStep} />
          </Box>
        </Flex>
      </Box>
      <Box w="100%" px="10px">
        <Box px={{ lg: '12.5%', md: '5%', sm: '5%' }}>
          <Flex py="40px">{changeStepPages()}</Flex>
          <Flex alignItems="center" justifyContent="space-between" py="20px" borderTop="1px solid" borderColor="gray.200">
            {!firstStep ? (
              <Button variant="outline" color="gray.400" onClick={() => previousStep()}>
                Previous
              </Button>
            ) : (
              <Box></Box>
            )}
            {!finalStep ? (
              <Button onClick={() => nextStep()}>Next</Button>
            ) : (
              <Button onClick={() => handleFinishSteps()}>Finish</Button>
            )}
          </Flex>
        </Box>
      </Box>
    </Container>
  );
}
