import { useState } from 'react';
import { Box, Textarea, Button, Alert, AlertIcon } from '@chakra-ui/react';

function PredictionForm() {
  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    setPrediction(data.prediction);
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb="6">
      <Textarea
        placeholder="Enter your text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        mb="4"
      />
      <Button type="submit" colorScheme="teal" w="100%">Predict Sentiment</Button>
      {prediction && (
        <Alert status={prediction === 'Positive' ? 'success' : 'error'} mt="4">
          <AlertIcon />
          Sentiment: {prediction}
        </Alert>
      )}
    </Box>
  );
}

export default PredictionForm;
