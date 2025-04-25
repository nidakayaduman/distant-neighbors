import React, { useState } from 'react';
import './App.css';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

function InfoBox() {
  const [open, setOpen] = useState(false);
  
  return (
    <div style={{ margin: "24px 0" }}>
      <button
        className="info-box-button"
        style={{
          background: "linear-gradient(to right, #f6f8fa, #e9ecef)",
          border: "none",
          borderRadius: 12,
          padding: "12px 20px",
          fontWeight: "bold",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          color: "#2d3748",
          fontSize: "1.05rem",
          transition: "all 0.2s ease"
        }}
        onClick={() => setOpen((v) => !v)}
      >
        <span role="img" aria-label="info" style={{ marginRight: "10px" }}>ℹ️</span>
        How Do We Calculate City Similarity?
        <span style={{ marginLeft: "10px", fontSize: "0.8rem", transition: "transform 0.3s ease" }}>
          {open ? "▲" : "▼"}
        </span>
      </button>
      
      {open && (
        <div
          style={{
            marginTop: 16,
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 12,
            padding: "24px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            fontSize: "1.02rem",
            maxWidth: 700,
            lineHeight: 1.6,
            color: "#2d3748"
          }}
        >
          <h2 style={{ 
            fontSize: "1.5rem", 
            marginTop: 0, 
            marginBottom: "1.2rem",
            color: "#1a365d",
            borderBottom: "2px solid #e2e8f0",
            paddingBottom: "0.75rem"
          }}>
            How Do We Calculate City Similarity?
          </h2>
          
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ 
              fontSize: "1.25rem", 
              color: "#2b6cb0", 
              marginBottom: "0.75rem",
              display: "flex",
              alignItems: "center"
            }}>
              <span style={{ 
                background: "#ebf8ff", 
                color: "#3182ce",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "10px",
                fontSize: "0.9rem",
                fontWeight: "bold"
              }}>1</span>
              Data Groups and Features
            </h3>
            <div style={{ paddingLeft: "38px" }}>
              <p>Each city is represented and compared using several groups of features:</p>
              
              <div style={{ marginBottom: "10px" }}>
                <p style={{ fontWeight: "600", marginBottom: "5px", color: "#4a5568" }}>Socioeconomic:</p>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#4a5568" }}>
                  <li>GSH2023 (Gross Domestic Product)</li>
                  <li>İSSİZLİK2023 (Unemployment Rate)</li>
                  <li>OKUMAYAZMAORANİ2023 (Literacy Rate)</li>
                  <li>NUFUS2023 (Population)</li>
                </ul>
              </div>
              
              <div style={{ marginBottom: "10px" }}>
                <p style={{ fontWeight: "600", marginBottom: "5px", color: "#4a5568" }}>Healthcare:</p>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#4a5568" }}>
                  <li>DOKTORSAYİSİ2023 (Doctor Number)</li>
                </ul>
              </div>
              
              <div style={{ marginBottom: "10px" }}>
                <p style={{ fontWeight: "600", marginBottom: "5px", color: "#4a5568" }}>Safety:</p>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#4a5568" }}>
                  <li>SUCORANLARİ2023 (Crime Rate)</li>
                  <li>KAZASAYİSİ2023 (Accident Number)</li>
                </ul>
              </div>
              
              <div style={{ marginBottom: "10px" }}>
                <p style={{ fontWeight: "600", marginBottom: "5px", color: "#4a5568" }}>Culture/Arts:</p>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#4a5568" }}>
                  <li>TİYATRO2023 (Theater Number)</li>
                </ul>
              </div>
              
              <div style={{ marginBottom: "10px" }}>
                <p style={{ fontWeight: "600", marginBottom: "5px", color: "#4a5568" }}>Climate:</p>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#4a5568" }}>
                  <li>İKLİMOCAK, …, İKLİMARALİK (Monthly average temperatures from January to December)</li>
                </ul>
              </div>
              
              <div style={{ marginBottom: "10px" }}>
                <p style={{ fontWeight: "600", marginBottom: "5px", color: "#4a5568" }}>Political Preferences:</p>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#4a5568" }}>
                  <li>MİLLETİTTİFAKİ, CUMHURİTTİFAKİ, ATAİTTİFAKİ, EMEKVEOZGURLUK (Election results 2023)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ 
              fontSize: "1.25rem", 
              color: "#2b6cb0", 
              marginBottom: "0.75rem",
              display: "flex",
              alignItems: "center"
            }}>
              <span style={{ 
                background: "#ebf8ff", 
                color: "#3182ce",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "10px",
                fontSize: "0.9rem",
                fontWeight: "bold"
              }}>2</span>
              What is Cosine Similarity?
            </h3>
            <div style={{ paddingLeft: "38px" }}>
              <p>We use cosine similarity to compare your selected city with others.</p>
              <p>Cosine similarity is a mathematical method that calculates a score between 0 and 1 based on how similar two cities' feature vectors are:</p>
              
              <div style={{ 
                display: "flex", 
                justifyContent: "space-around", 
                margin: "1rem 0", 
                padding: "1rem", 
                background: "#f7fafc", 
                borderRadius: "8px" 
              }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#276749" }}>1</div>
                  <div>means the cities are very similar.</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#c53030" }}>0</div>
                  <div>means the cities are very different.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ 
              fontSize: "1.25rem", 
              color: "#2b6cb0", 
              marginBottom: "0.75rem",
              display: "flex",
              alignItems: "center"
            }}>
              <span style={{ 
                background: "#ebf8ff", 
                color: "#3182ce",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "10px",
                fontSize: "0.9rem",
                fontWeight: "bold"
              }}>3</span>
              Step-by-Step Example Calculation
            </h3>
            <div style={{ paddingLeft: "38px" }}>
              <div style={{ 
                background: "#f8fafc", 
                padding: "1rem", 
                borderRadius: "8px", 
                border: "1px solid #e2e8f0" 
              }}>
                <p style={{ fontWeight: "600", marginTop: 0 }}>A. Gather Data for Each City:</p>
                <p>For example, in the "Socioeconomic" group, we collect these values for each city:</p>
                <ul style={{ color: "#4a5568" }}>
                  <li>Istanbul: [0.80, 0.20, 0.97, 0.99]</li>
                  <li>Ankara: [0.65, 0.23, 0.95, 0.75]</li>
                </ul>
                <p>Each number represents GDP, Unemployment, Literacy Rate, and Population, in that order.</p>
                
                <p style={{ fontWeight: "600", marginBottom: "5px" }}>B. Dot Product:</p>
                <p>Multiply the corresponding values and add them up:</p>
                <p>(0.80 × 0.65) + (0.20 × 0.23) + (0.97 × 0.95) + (0.99 × 0.75) = 2.23</p>
                
                <p style={{ fontWeight: "600", marginBottom: "5px" }}>C. Vector Lengths:</p>
                <ul style={{ color: "#4a5568" }}>
                  <li>Istanbul: √(0.80² + 0.20² + 0.97² + 0.99²) ≈ 1.61</li>
                  <li>Ankara: √(0.65² + 0.23² + 0.95² + 0.75²) ≈ 1.39</li>
                </ul>
                
                <p style={{ fontWeight: "600", marginBottom: "5px" }}>D. Cosine Similarity Formula:</p>
                <p>Cosine Similarity = 2.23 / (1.61 × 1.39) ≈ 0.995</p>
                <p>So, similarity is 99.5%.</p>
              </div>
            </div>
          </div>
          
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ 
              fontSize: "1.25rem", 
              color: "#2b6cb0", 
              marginBottom: "0.75rem",
              display: "flex",
              alignItems: "center"
            }}>
              <span style={{ 
                background: "#ebf8ff", 
                color: "#3182ce",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "10px",
                fontSize: "0.9rem",
                fontWeight: "bold"
              }}>4</span>
              How Does Weighted Similarity Work?
            </h3>
            <div style={{ paddingLeft: "38px" }}>
              <p>You can customize the importance of each group (from 0 to 5).</p>
              <p>For each group, cosine similarity is calculated separately and multiplied by your chosen importance (weight).</p>
              
              <div style={{ 
                background: "#f8fafc", 
                padding: "1rem", 
                borderRadius: "8px", 
                border: "1px solid #e2e8f0",
                marginTop: "0.75rem"
              }}>
                <p style={{ fontWeight: "600", marginTop: 0 }}>Example:</p>
                <ul style={{ color: "#4a5568" }}>
                  <li>Socioeconomic: Similarity 0.995, Weight: 5</li>
                  <li>Healthcare: Similarity 0.91, Weight: 3</li>
                  <li>Safety: Similarity 0.60, Weight: 1</li>
                </ul>
                
                <p style={{ fontWeight: "600", marginBottom: "5px" }}>Weighted Score:</p>
                <p>Weighted Score = (0.995 × 5) + (0.91 × 3) + (0.60 × 1) / (5 + 3 + 1)</p>
              </div>
              
              <p style={{ fontStyle: "italic", marginTop: "0.75rem" }}>Your results are shaped by your personal preferences.</p>
            </div>
          </div>
          
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ 
              fontSize: "1.25rem", 
              color: "#2b6cb0", 
              marginBottom: "0.75rem",
              display: "flex",
              alignItems: "center"
            }}>
              <span style={{ 
                background: "#ebf8ff", 
                color: "#3182ce",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "10px",
                fontSize: "0.9rem",
                fontWeight: "bold"
              }}>5</span>
              What is Equal Similarity?
            </h3>
            <div style={{ paddingLeft: "38px" }}>
              <p>When you use the "Equal Similarity" option, the system compares your selected city to all other cities by considering all available data groups equally.</p>
              <p>You do not need to choose any priorities or weights—every group is treated as equally important.</p>
              
              <p style={{ fontWeight: "600", marginTop: "1rem", marginBottom: "0.5rem" }}>How Does Equal Similarity Work?</p>
              
              <p style={{ fontWeight: "600", marginBottom: "5px", color: "#4a5568" }}>All Data Combined:</p>
              <p>For each city, all features (economy, population, education, healthcare, safety, culture, climate, political preferences, etc.) are gathered and combined into a single list of values.</p>
              
              <p style={{ fontWeight: "600", marginBottom: "5px", color: "#4a5568" }}>No Group Has Extra Importance:</p>
              <ul style={{ color: "#4a5568" }}>
                <li>Each group is considered just as important as every other group.</li>
                <li>No group has more effect on the result than the others.</li>
              </ul>
              
              <p style={{ fontWeight: "600", marginBottom: "5px", color: "#4a5568" }}>Cosine Similarity Calculation:</p>
              <p>We calculate cosine similarity between your chosen city and all others, using all combined data.</p>
              <p>The resulting score tells us how close each city is to yours (between 0 and 1).</p>
              
              <p style={{ fontWeight: "600", marginBottom: "5px", marginTop: "1rem", color: "#4a5568" }}>What Does the Result Mean?</p>
              <p>You will see a list of cities that are most similar to your chosen city, based on all features, with no extra weighting.</p>
              
              <p style={{ fontWeight: "600", marginBottom: "5px", marginTop: "1rem", color: "#4a5568" }}>When Should I Use Equal Similarity?</p>
              <ul style={{ color: "#4a5568" }}>
                <li>If you want an overall comparison using all available data,</li>
                <li>If you do not want to set your own priorities,</li>
                <li>If you are curious about which cities are generally most similar,</li>
              </ul>
              <p>…then "Equal Similarity" is the best choice for you!</p>
              
              <div style={{ 
                background: "#f0fff4", 
                padding: "1rem", 
                borderRadius: "8px", 
                border: "1px solid #c6f6d5",
                marginTop: "1rem"
              }}>
                <p style={{ fontWeight: "600", marginTop: 0, color: "#2f855a" }}>Summary:</p>
                <ul style={{ color: "#2f855a", marginBottom: 0 }}>
                  <li>With "Equal Similarity," you get a general, unbiased comparison of all cities, based on every feature in our database.</li>
                  <li>No extra settings are needed.</li>
                  <li>Just select your city and see which other cities are most similar—using all the data, equally!</li>
                </ul>
              </div>
              
              <div style={{ 
                background: "#ebf8ff", 
                padding: "1rem", 
                borderRadius: "8px", 
                border: "1px solid #bee3f8",
                marginTop: "1rem"
              }}>
                <p style={{ fontWeight: "600", marginTop: 0, color: "#2b6cb0" }}>Tip:</p>
                <p style={{ color: "#2b6cb0", marginBottom: 0 }}>If you want to customize the importance of each group (for example, if "climate" matters most to you), try the "Weighted Similarity" option instead.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
// Feature Grupları
const groups = [
  {
    key: 'socioeconomic',
    label: 'Socioeconomic',
    features: ['GSH2023', 'İSSİZLİK2023', 'OKUMAYAZMAORANİ2023', 'NUFUS2023'],
  },
  { key: 'health', label: 'Healthcare', features: ['DOKTORSAYİSİ2023'] },
  { key: 'safety', label: 'Safety', features: ['SUCORANLARİ2023', 'KAZASAYİSİ2023'] },
  { key: 'culture', label: 'Culture/Arts', features: ['TİYATRO2023'] },
  {
    key: 'climate', label: 'Climate',
    features: [
      'İKLİMOCAK', 'İKLİMSUBAT', 'İKLİMMART', 'İKLİMNİSAN', 'İKLİMMAYIS', 'İKLİMHAZİRAN',
      'İKLİMTEMMUZ', 'İKLİMAGUSTOS', 'İKLİMEYLUL', 'İKLİMEKİM', 'İKLİMARALİK'
    ]
  },
  {
    key: 'political', label: 'Political Preferences',
    features: ['MİLLETİTTİFAKİ', 'CUMHURİTTİFAKİ', 'ATAİTTİFAKİ', 'EMEKVEOZGURLUK']
  },
];

const cities = [
  "ADANA", "ADIYAMAN", "AFYONKARAHİSAR", "AĞRI", "AKSARAY", "AMASYA", "ANKARA",
  "ANTALYA", "ARDAHAN", "ARTVİN", "AYDIN", "BALIKESİR", "BARTIN", "BATMAN",
  "BAYBURT", "BİLECİK", "BİNGÖL", "BİTLİS", "BOLU", "BURDUR", "BURSA",
  "ÇANAKKALE", "ÇANKIRI", "ÇORUM", "DENİZLİ", "DİYARBAKIR", "DÜZCE", "EDİRNE",
  "ELAZIĞ", "ERZİNCAN", "ERZURUM", "ESKİŞEHİR", "GAZİANTEP", "GİRESUN",
  "GÜMÜŞHANE", "HAKKARİ", "HATAY", "IĞDIR", "ISPARTA", "İSTANBUL", "İZMİR",
  "KAHRAMANMARAŞ", "KARABÜK", "KARAMAN", "KARS", "KASTAMONU", "KAYSERİ",
  "KIRIKKALE", "KIRKLARELİ", "KIRŞEHİR", "KİLİS", "KOCAELİ", "KONYA",
  "KÜTAHYA", "MALATYA", "MANİSA", "MARDİN", "MERSİN", "MUĞLA", "MUŞ",
  "NEVŞEHİR", "NİĞDE", "ORDU", "OSMANİYE", "RİZE", "SAKARYA", "SAMSUN",
  "SİİRT", "SİNOP", "SİVAS", "ŞANLIURFA", "ŞIRNAK", "TEKİRDAĞ", "TOKAT",
  "TRABZON", "TUNCELİ", "UŞAK", "VAN", "YALOVA", "YOZGAT", "ZONGULDAK"
];

function App() {
  const [city, setCity] = useState('');
  const [cosineResult, setCosineResult] = useState(null);
  const [weightedResult, setWeightedResult] = useState(null);
  const [groupWeights, setGroupWeights] = useState(
    groups.reduce((acc, g) => ({ ...acc, [g.key]: 0 }), {})
  
  );

  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '40px',
    width: '100%'
  };

  // Cosine similarity fetch (classic)
  const handleCosineSimilarity = async () => {
    if (!city || !cities.includes(city.trim().toUpperCase())) return;
    try {
      const response = await fetch('city_cosine_similarity_matrix_new.json');
      const data = await response.json();
      const upperCity = city.trim().toUpperCase();
      const similarities = data[upperCity];

      if (!similarities) {
        setCosineResult([{ name: 'Error', score: 0 }]);
        return;
      }

      const sorted = Object.entries(similarities)
        .filter(([key]) => key !== upperCity)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, score]) => ({
          name,
          score: parseFloat((score * 100).toFixed(2))
        }));

      setCosineResult(sorted);
    } catch (error) {
      console.error("FETCH ERROR:", error);
      setCosineResult([{ name: 'Error', score: 0 }]);
    }
  };

  // Cosine similarity helper for weighted
  function cosineSimilarity(v1, v2) {
    const dot = v1.reduce((sum, x, i) => sum + x * v2[i], 0);
    const mag1 = Math.sqrt(v1.reduce((sum, x) => sum + x * x, 0));
    const mag2 = Math.sqrt(v2.reduce((sum, x) => sum + x * x, 0));
    return mag1 && mag2 ? dot / (mag1 * mag2) : 0;
  }

  function weightedCosineSimilarity(cityA, cityB, weights, groupDefs) {
    let total = 0;
    let usedWeights = 0;
    groupDefs.forEach(group => {
      const groupWeight = weights[group.key] || 0;
      if (groupWeight > 0) {
        const v1 = group.features.map(f => Number(cityA[f]));
        const v2 = group.features.map(f => Number(cityB[f]));
        const sim = cosineSimilarity(v1, v2);
        total += groupWeight * sim;
        usedWeights += groupWeight;
      }
    });
    // Weighted average
    return usedWeights > 0 ? total / usedWeights : 0;
  }

  const handleWeightedSimilarity = async () => {
    if (!city || !cities.includes(city.trim().toUpperCase())) return;
    const totalWeight = Object.values(groupWeights).reduce((a, b) => a + b, 0);
    if (totalWeight === 0) return;

    try {
      const response = await fetch('city_features_by_city.json');
      const data = await response.json();
      const userCityFeatures = data[city.trim().toUpperCase()];
      if (!userCityFeatures) {
        setWeightedResult([{ name: 'Error', score: 0 }]);
        return;
      }

      const results = Object.entries(data)
        .filter(([name]) => name !== city.trim().toUpperCase())
        .map(([name, features]) => ({
          name,
          score: weightedCosineSimilarity(userCityFeatures, features, groupWeights, groups)
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .map(r => ({ ...r, score: parseFloat((r.score * 100).toFixed(2)) }));

      setWeightedResult(results);
    } catch (error) {
      console.error("FETCH ERROR:", error);
      setWeightedResult([{ name: 'Error', score: 0 }]);
    }
  };

  // Slider (0-5) panel
  const renderSliders = () => (
    <div className="form-section">
      <h2>Distribute importance among the groups (0: Not important, 5: Most important)</h2>
      {groups.map(group => (
        <div key={group.key} className="form-row">
          <label>{group.label}</label>
          <input
            type="range"
            min="0"
            max="5"
            step="1"
            value={groupWeights[group.key]}
            onChange={e =>
              setGroupWeights(prev => ({
                ...prev,
                [group.key]: Number(e.target.value)
              }))
            }
            style={{ width: '200px', marginRight: '10px' }}
          />
          <span style={{ fontWeight: 'bold', marginLeft: 8 }}>{groupWeights[group.key]}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div style={backgroundStyle}>
      <div className="container">
      <InfoBox />  {/* <-- Burası! */}
        {/* City selection */}
        <div className="form-section">
          <h2>Identify Your Current City</h2>
          <div className="form-row">
            <label htmlFor="cityInput">City</label>
            <input
              list="city-list"
              id="cityInput"
              placeholder="Search or select a city..."
              value={city}
              onChange={(e) => setCity(e.target.value.toUpperCase())}
            />
            <datalist id="city-list">
              {cities.map((city) => (
                <option key={city} value={city} />
              ))}
            </datalist>
          </div>
        </div>

        {/* Slider group importance */}
        {renderSliders()}

        {/* Button panel */}
        <div className="form-section" style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
          <button
            className="button"
            style={{ flex: 1 }}
            onClick={handleCosineSimilarity}
            disabled={!cities.includes(city.trim().toUpperCase())}
          >
            Show Cosine Similarity (Equal Weight)
          </button>
          <button
            className="button"
            style={{ flex: 1 }}
            onClick={handleWeightedSimilarity}
            disabled={
              !cities.includes(city.trim().toUpperCase()) ||
              Object.values(groupWeights).every(v => v === 0)
            }
          >
            Show Weighted Similarity
          </button>
        </div>

        {/* Cosine Similarity Result */}
        {cosineResult && Array.isArray(cosineResult) && (
          <div className="chart-section">
            <h3>Top 5 Most Similar Cities (Equal Weight)</h3>
            <ul>
              {cosineResult.map((r) => (
                <li key={r.name}>{r.name} - {r.score}%</li>
              ))}
            </ul>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={cosineResult} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit="%" />
                <Tooltip />
                <Bar dataKey="score" fill="#AC1947" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Weighted Similarity Result */}
        {weightedResult && Array.isArray(weightedResult) && (
          <div className="chart-section">
            <h3>Top 5 Most Similar Cities (Weighted Similarity)</h3>
            <ul>
              {weightedResult.map((r) => (
                <li key={r.name}>{r.name} - {r.score}%</li>
              ))}
            </ul>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weightedResult} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit="%" />
                <Tooltip />
                <Bar dataKey="score" fill="#1947AC" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
