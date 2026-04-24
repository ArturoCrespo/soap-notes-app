import { useState } from "react";

function App() {
  const [sessionSummary, setSessionSummary] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
    setResult("Generating...");
  };

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", fontFamily: "Arial" }}>
      <h1>SOAP Notes Generator</h1>

      <textarea
        rows="12"
        style={{ width: "100%", padding: "12px" }}
        placeholder="Paste de-identified session summary here..."
        value={sessionSummary}
        onChange={(e) => setSessionSummary(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        style={{ marginTop: "16px", padding: "10px 16px" }}
      >
        Generate SOAP Note
      </button>

      <div style={{ marginTop: "24px", whiteSpace: "pre-wrap" }}>
        {result}
      </div>
    </div>
  );
}

export default App;