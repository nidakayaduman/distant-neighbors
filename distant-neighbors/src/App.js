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
          background: "#eee",
          border: "none",
          borderRadius: 12,
          padding: "8px 16px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
        onClick={() => setOpen((v) => !v)}
      >
        How Do We Calculate City Similarity?
      </button>
      {open && (
        <div
          style={{
            marginTop: 12,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: 10,
            padding: "16px 20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.09)",
            fontSize: "1.02rem",
            maxWidth: 560,
            whiteSpace: "pre-line" // Satır arası boşlukları korur
          }}
        >
{`How Do We Calculate City Similarity?
1. Data Groups and Features
Each city is represented and compared using several groups of features:

Socioeconomic:

GSH2023 (Gross Domestic Product)

İSSİZLİK2023 (Unemployment Rate)

OKUMAYAZMAORANİ2023 (Literacy Rate)

NUFUS2023 (Population)

Healthcare:

DOKTORSAYİSİ2023 (Doctor Number)

Safety:

SUCORANLARİ2023 (Crime Rate)

KAZASAYİSİ2023 (Accident Number)

Culture/Arts:

TİYATRO2023 (Theater Number)

Climate:

İKLİMOCAK, …, İKLİMARALİK (Monthly average temperatures from January to December)

Political Preferences:

MİLLETİTTİFAKİ, CUMHURİTTİFAKİ, ATAİTTİFAKİ, EMEKVEOZGURLUK (Election results 2023)

2. What is Cosine Similarity?
We use cosine similarity to compare your selected city with others.
Cosine similarity is a mathematical method that calculates a score between 0 and 1 based on how similar two cities’ feature vectors are:

1 means the cities are very similar.

0 means the cities are very different.

3. Step-by-Step Example Calculation
A. Gather Data for Each City:
For example, in the “Socioeconomic” group, we collect these values for each city:

Istanbul: [0.80, 0.20, 0.97, 0.99]

Ankara: [0.65, 0.23, 0.95, 0.75]

Each number represents GDP, Unemployment, Literacy Rate, and Population, in that order.

B. Dot Product:
Multiply the corresponding values and add them up:
(0.80 × 0.65) + (0.20 × 0.23) + (0.97 × 0.95) + (0.99 × 0.75) = 2.23

C. Vector Lengths:

Istanbul: √(0.80² + 0.20² + 0.97² + 0.99²) ≈ 1.61

Ankara: √(0.65² + 0.23² + 0.95² + 0.75²) ≈ 1.39

D. Cosine Similarity Formula:
Cosine Similarity = 2.23 / (1.61 × 1.39) ≈ 0.995
So, similarity is 99.5%.

4. How Does Weighted Similarity Work?
You can customize the importance of each group (from 0 to 5).
For each group, cosine similarity is calculated separately and multiplied by your chosen importance (weight).

Example:

Socioeconomic: Similarity 0.995, Weight: 5

Healthcare: Similarity 0.91, Weight: 3

Safety: Similarity 0.60, Weight: 1

Weighted Score:
Weighted Score = (0.995 × 5) + (0.91 × 3) + (0.60 × 1) / (5 + 3 + 1)

Your results are shaped by your personal preferences.

5. What is Equal Similarity?
When you use the "Equal Similarity" option, the system compares your selected city to all other cities by considering all available data groups equally.
You do not need to choose any priorities or weights—every group is treated as equally important.

How Does Equal Similarity Work?
All Data Combined:
For each city, all features (economy, population, education, healthcare, safety, culture, climate, political preferences, etc.) are gathered and combined into a single list of values.

No Group Has Extra Importance:
Each group is considered just as important as every other group.
No group has more effect on the result than the others.

Cosine Similarity Calculation:
We calculate cosine similarity between your chosen city and all others, using all combined data.
The resulting score tells us how close each city is to yours (between 0 and 1).

What Does the Result Mean?
You will see a list of cities that are most similar to your chosen city, based on all features, with no extra weighting.

When Should I Use Equal Similarity?
If you want an overall comparison using all available data,

If you do not want to set your own priorities,

If you are curious about which cities are generally most similar,

…then “Equal Similarity” is the best choice for you!

Summary:
With “Equal Similarity,” you get a general, unbiased comparison of all cities, based on every feature in our database.
No extra settings are needed.
Just select your city and see which other cities are most similar—using all the data, equally!

Tip:
If you want to customize the importance of each group (for example, if “climate” matters most to you), try the “Weighted Similarity” option instead.`}
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
      const response = await fetch('cosine_similarity_matrix.json');
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
      const response = fetch('city_features_by_city.json');
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
