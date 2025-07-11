import { useState } from 'react';
import { Box, Textarea, Button, Alert, AlertIcon } from '@chakra-ui/react';

function PredictionForm() {
  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');

  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPrediction('');
    setError('');

    console.log("API_URL:", API_URL);
    console.log("Submitting:", text);

    try {
      const response = await fetch(`${API_URL}/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      console.log("Response JSON:", data);

      if (response.ok && data.prediction) {
        setPrediction(data.prediction);
      } else {
        setError(data.error || 'Unexpected error');
      }
    } catch (err) {
      setError('Bağlantı hatası');
      console.error("Fetch error:", err.message);
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

      {error && (
        <Alert status="error" mt="4">
          <AlertIcon />
          {error}
        </Alert>
      )}
    </Box>
  );
}

export default PredictionForm;
