import os
from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows communication from frontend

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model_path = os.path.join(BASE_DIR, "models", "trained_model.sav")
vectorizer_path = os.path.join(BASE_DIR, "vectorizer.pkl")

model = pickle.load(open(model_path, "rb"))
vectorizer = pickle.load(open(vectorizer_path, "rb"))


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    tweet = data.get('text', '')
    tweet_vector = vectorizer.transform([tweet])
    prediction = model.predict(tweet_vector)[0]
    sentiment = "Positive" if prediction == 1 else "Negative"
    return jsonify({'prediction': sentiment})

if __name__ == '__main__':
    app.run(debug=True)
