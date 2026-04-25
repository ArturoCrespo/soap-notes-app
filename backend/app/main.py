from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class NoteRequest(BaseModel):
    session_summary: str
    note_style: str = "concise"
    modality: str = "unspecified"
    risk_assessed: bool = False
    measures_used: list[str] = []

@app.get("/")
def read_root():
    return {"message": "Backend is running"}

@app.post("/generate-note")
def generate_note(request: NoteRequest):
    return {
        "status": "ok",
        "subject": f"Client reported: {request.session_summary}",
        "objective": "No information provided.",
        "assessment": "Initial generated assessment placeholder.",
        "plan": "Initial generated plan placeholder.",
        "soap_text": f"S: Client reported: {request.session_summary}\n\nO: No information provided.\n\nA: Initial generated assessment placeholder.\n\nP: Initial generated plan placeholder."
    }