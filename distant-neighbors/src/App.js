import React, { useState } from 'react';
import './App.css';

const criteria = [
  { key: 'politics', label: 'Political Orientation' },
  { key: 'population', label: 'Population Size' },
  { key: 'unemployment', label: 'Unemployment Rate' },
  { key: 'crime', label: 'Crime Rate' },
  { key: 'doctors', label: 'Healthcare Access (Doctors)' },
  { key: 'theaters', label: 'Cultural Activity (Theaters)' },
  { key: 'gdp', label: 'Gross Domestic Product (GDP)' },
  { key: 'climate', label: 'Climate Preference' },
  { key: 'literacy', label: 'Literacy Rate' }
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
  const [result, setResult] = useState(null);
  const [weights, setWeights] = useState(
    criteria.reduce((acc, cur) => ({ ...acc, [cur.key]: '' }), {})
  );

  const backgroundStyle = {
    backgroundImage: "url('/city.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '40px',
  };

  const handleWeightChange = (key, value) => {
    if (value === '') {
      setWeights((prev) => ({ ...prev, [key]: '' }));
      return;
    }

    if (/^\d{1,3}$/.test(value)) {
      const intVal = parseInt(value, 10);
      if (intVal >= 0 && intVal <= 100) {
        setWeights((prev) => ({ ...prev, [key]: intVal }));
      }
    }
  };

  const totalWeight = Object.values(weights).reduce((sum, val) => sum + (parseInt(val) || 0), 0);

  const handleSubmit = async () => {
    if (!city || totalWeight !== 100) return;

    try {
      const response = await fetch('cosine_similarity_matrix.json');
      const data = await response.json();
      const upperCity = city.trim().toUpperCase();
      const similarities = data[upperCity];

      if (!similarities) {
        setResult('The specified city could not be found. Please try again.');
        return;
      }

      const sorted = Object.entries(similarities)
        .filter(([key]) => key !== upperCity)
        .sort((a, b) => b[1] - a[1]);
      const [mostSimilarCity, similarityScore] = sorted[0];
      setResult(`${mostSimilarCity} has a similarity score of ${(similarityScore * 100).toFixed(2)}%.`);
    } catch (error) {
      console.error("FETCH ERROR:", error);
      setResult(`Hata: ${error.message}`);
    }
  };

  return (
    <div style={backgroundStyle}>
      <div className="container">
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

        <div className="form-section">
          <h2>Distribute 100 Points Among the Following Criteria</h2>
          {criteria.map(({ key, label }) => (
            <div key={key} className="form-row">
              <label>{label}</label>
              <input
                type="number"
                min="0"
                max="100"
                value={weights[key]}
                onChange={(e) => handleWeightChange(key, e.target.value)}
              />
            </div>
          ))}
          <p className={`weight-total ${totalWeight !== 100 ? 'invalid' : 'valid'}`}>
            Total: {totalWeight} / 100
          </p>
        </div>

        <button
          className="button"
          onClick={handleSubmit}
          disabled={totalWeight !== 100 || !cities.includes(city.trim())}
        >
          Submit
        </button>

        {result && <p className="result-text">{result}</p>}
      </div>
    </div>
  );
}

export default App;
