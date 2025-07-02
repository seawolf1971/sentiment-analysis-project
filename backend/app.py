import os
from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS

app = Flask(__name__)

# ✅ Properly enable CORS for all origins and methods
CORS(app, origins="*", methods=["GET", "POST", "OPTIONS"], allow_headers=["Content-Type"])

# Paths to model and vectorizer
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, "models", "trained_model.sav")
vectorizer_path = os.path.join(BASE_DIR, "vectorizer.pkl")

# Load model and vectorizer
model = pickle.load(open(model_path, "rb"))
vectorizer = pickle.load(open(vectorizer_path, "rb"))

@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    if request.method == 'OPTIONS':
        # Preflight response for CORS
        return '', 204

    data = request.get_json()
    tweet = data.get('text', '')
    if not tweet:
        return jsonify({'error': 'No text provided'}), 400

    try:
        tweet_vector = vectorizer.transform([tweet])
        prediction = model.predict(tweet_vector)[0]
        sentiment = "Positive" if prediction == 1 else "Negative"
        return jsonify({'prediction': sentiment})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ✅ Bind to 0.0.0.0 and dynamic port for Render
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port, debug=True)
