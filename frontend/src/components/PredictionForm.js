import { useState } from 'react';
import { Box, Textarea, Button, Alert, AlertIcon } from '@chakra-ui/react';

function PredictionForm() {
  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState('');

  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
  e.preventDefault();
  setPrediction('');
  setError('');

  console.log("Submitting:", text);  // ✅ Ne zaman çalışıyor görelim

  try {
    const response = await fetch(`${API_URL}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    console.log("Raw response:", response); // ✅ Hata mı dönüyor görelim

    const data = await response.json();
    console.log("Response JSON:", data); // ✅ İçerik ne görelim

    if (response.ok && data.prediction) {
      setPrediction(data.prediction);
    } else {
      setError(data.error || 'Unexpected error');
    }
  } catch (err) {
    setError('Bağlantı hatası');
    console.error("Fetch error:", err);
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
