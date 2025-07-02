import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

function HowToUse() {
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={5}
      mb={8}
      bg={bgColor}
      borderColor={borderColor}
    >
      <Heading size="md" mb={3}>
        How to Use
      </Heading>
      <Text>
        Type any sentence in the text box and click <b>"Predict Sentiment"</b>. The app will return whether your input has a positive or negative sentiment based on a machine learning model trained on Sentiment140 dataset from Kaggle.
      </Text>
    </Box>
  );
}

export default HowToUse;
