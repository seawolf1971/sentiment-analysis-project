import { useState } from 'react';
import { Box, Textarea, Button, Alert, AlertIcon } from '@chakra-ui/react';

function PredictionForm() {
  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState('');

  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Prevent the form from refreshing the page(!)

    try {
      const response = await fetch(`${API_URL}/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (err) {
      setPrediction('Error');
      console.error('Prediction failed:', err);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb="6">
      <Textarea
        placeholder="Enter your text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        mb="4"
      />
      <Button type="submit" colorScheme="teal" w="100%">
        Predict Sentiment
      </Button>
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
