# 🐱‍👤 Detext

**Detext** is a web-based text classification tool that determines whether a given text is "safe" or "fraud". It uses technologies such as **React**, **FastAPI**, **Pydantic**, **Huggingface's Transformers** to offer a robust solution for text classification tasks. The Detext's dataset is built from the three collated fraud/scam/spam datasets.

---

## 🎯 Purpose

To classify text as either "safe" or "fraud" using machine learning models.

---

## 🚀 Features

- 🧠 Classifies text to determin if it's safe or fraud
- 💻 Frontend built with React for a seamless user experience
- ⚡ Fast and responsive backend with FastAPI
- 📜 API documentation available at `/docs` for easy interaction
- 🧪 Easy to train and customize model

---

## 🛠️ Tech Stack

- **Frontend**: React, SASS
- **Backend**: FastAPI, Pydantic
- **Modeling**: Huggingface Transformers, DistilBERT (uncased)

---

## 📦 Development

```bash
# Clone the repo
git clone https://github.com/markcalendario/detext.git
cd detext
```

### Client

```bash
# Navigate to the client directory
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Server

```bash
# Navigate to the server directory
cd server

# Install dependencies
pip install -r requirements.txt

# Start the FastAPI server
fastapi dev main.py
```

### Trainer

To train the model, follow these steps:

**Create a virtual environment**:

```bash
cd trainer
python -m venv venv
```

**Activate the virtual environment**:

```bash
.\venv\Scripts\activate
```

**Create a Jupyter kernel** for the virtual environment:

```bash
pip install ipykernel

python -m ipykernel install --user --name=detext-venv

# Restart the code editor to switch to the new kernel
```

**Run the training notebook**:

Open the notebook `trainer.ipynb` and train the model using Huggingface transformers.

---

## 🤖 After Training

Once the model is trained, copy the model files to the backend to be used for predictions.

```bash
# Copy the trained model to the server's model dir
cp -r trainer/out/detext_dataset/* server/model/detext/
```

Ensure the model files include:

- The model checkpoint (e.g., `pytorch_model.bin` or similar)
- The model configuration (e.g., `config.json`)
- Tokenizer files (e.g., `tokenizer.json`)

---

## 📄 Usage

Once the project is set up and running, you can:

1. **Run the React frontend**:

   - Open a web browser and navigate to `http://localhost:5173` (default port for React).
   - Input text into the provided form, and the system will classify whether it is **safe** or **fraud**.

2. **Access FastAPI Documentation**:

   - The FastAPI backend provides interactive API documentation at `http://localhost:8000/docs`.
   - Here you can view available endpoints, try them out, and see example requests and responses for the text classification service.

## 🚀 Deployment

```bash
# Build and run client and server concurrently using docker compose
docker compose up --build -d
```
