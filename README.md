# 🧠 Sentiment Analysis Project

A full-stack machine learning application for real-time Twitter sentiment classification. This project includes a trained ML model, a Flask backend API, and a React + Chakra UI frontend for user interaction.
---
## 🚀 Live Demo

👉 Try it here: [https://sentiment-analysis-project-wheat.vercel.app](https://sentiment-analysis-project-wheat.vercel.app)
---

## 📁 Project Structure

```
sentiment-analysis-project/
│
├── backend/
│   ├── app.py                # Flask API to serve predictions
│   ├── vectorizer.pkl        # TF-IDF vectorizer for preprocessing
│   ├── trained_model.sav     # Trained Logistic Regression model
│   └── requirements.txt      # Backend dependencies
│
├── frontend/
│   └── ...                   # React + Chakra UI frontend
│
├── notebooks/
│   └── # Kaggle notebook for model training
│
└── README.md                 # Project documentation
```

---

## 💡 Technologies Used

### 🔍 Machine Learning & Data Processing (Python)
- **NumPy & Pandas**: Data exploration and manipulation.
- **Scikit-learn**: TF-IDF vectorization and Logistic Regression model.
- **NLTK (PorterStemmer)**: Word stemming to reduce to root form.
- **Model Accuracy**: Achieved ~80% accuracy on test data.

### 🔙 Backend (Python + Flask)
- **Flask**: Lightweight REST API to serve the machine learning model.
- **Pickle**: Model and vectorizer serialization/deserialization.

### 🌐 Frontend (React + Chakra UI)
- **React**: SPA (Single Page Application) for real-time sentiment prediction.
- **Chakra UI**: Accessible and modern UI component styling.

### 🛠 Additional Tools
- **Postman**: For testing API endpoints during development.
- **VS Code & PowerShell**: For local development and Git integration.

---

## 📊 Dataset

- **Source**: [Sentiment140 - Kaggle](https://www.kaggle.com/datasets/kazanova/sentiment140)
- **Size**: 1.6 million tweets labeled with sentiment
  - `0` → Negative
  - `4` → Positive (converted to `1`)
- **Fields**: `target`, `id`, `date`, `flag`, `user`, `text`

---

## ⚙️ Model Workflow

1. **Data Cleaning**:
   - Remove non-alphabetic characters
   - Lowercase all text
   - Remove stopwords
   - Apply stemming

2. **Vectorization**:
   - TF-IDF vectorizer converts text into numerical feature vectors

3. **Model Training**:
   - Train a Logistic Regression classifier on the processed dataset

4. **Model Evaluation**:
   - Training Accuracy: ~81%
   - Testing Accuracy: ~77.8%

5. **Export**:
   - Save model and vectorizer using `pickle`

---

## 🚀 Running the App Locally

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/sentiment-analysis-project.git
cd sentiment-analysis-project
```

### 2. Set Up Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
```

### 3. Start Frontend (React)
```bash
cd ../frontend
npm install
npm start
```

### 4. Test API
Use Postman or the frontend UI to send a tweet and receive sentiment analysis.

---

## 📓 Kaggle Notebook

The full training process, including:
- Data preprocessing
- TF-IDF transformation
- Model training
- Accuracy evaluation
- Model/vectorizer saving

Located in: `notebooks/sentiment_model_training.ipynb`

---

## 📬 Contact

Feel free to reach out with questions or improvements via GitHub Issues or Pull Requests.

---

## 🪪 License

This project is licensed under the MIT License.
