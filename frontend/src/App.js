import { Box, Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import PredictionForm from './components/PredictionForm';
import HowToUse from './components/HowToUse';
import TechStack from './components/TechStack';

function App() {
  return (
    <>
      <Navbar />
      <Container maxW="container.md" py="8">
        <Box mb="8">
          <PredictionForm />
        </Box>

        <Box mb="12">
          <HowToUse />
        </Box>

        {/* Tech Stack visually separated */}
        <Box
          bg="gray.50"
          _dark={{ bg: "gray.700" }}
          p="6"
          borderRadius="md"
          boxShadow="md"
        >
          <TechStack />
        </Box>
      </Container>
    </>
  );
}

export default App;
