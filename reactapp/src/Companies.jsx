
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Companies() {
  const [companies, setCompanies] = useState([]);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/companies')
      .then(res => res.json())
      .then(setCompanies);
  }, []);

  if (selected) {
    return (
      <div>
        <button onClick={() => setSelected(null)}>Back</button>
        <h2>{selected.name}</h2>
        <p><b>Established:</b> {selected.established_date}</p>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate('/')} style={{ marginBottom: 20 }}>Back</button>
      <h1>Companies</h1>
      <ul>
        {companies.map(c => (
          <li key={c.id}>
            <button onClick={() => setSelected(c)}>{c.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
