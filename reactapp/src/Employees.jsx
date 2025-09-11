

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState(null);
  const [companyName, setCompanyName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/employees')
      .then(res => res.json())
      .then(setEmployees);
  }, []);


  useEffect(() => {
    if (selected && selected.company_id) {
      fetch(`/api/companies/${selected.company_id}`)
        .then(res => res.json())
        .then(data => setCompanyName(data.name || ''));
    } else {
      setCompanyName('');
    }
  }, [selected]);

  if (selected) {
    return (
      <div>
        <button onClick={() => setSelected(null)}>Back</button>
        <h2>{selected.name}</h2>
        <p><b>Start Date:</b> {selected.start_date}</p>
        <p><b>Level:</b> {selected.level}</p>
        <p><b>Company:</b> {companyName}</p>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate('/')} style={{ marginBottom: 20 }}>Back</button>
      <h1>Employees</h1>
      <ul>
        {employees.map(e => (
          <li key={e.id}>
            <button onClick={() => setSelected(e)}>{e.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
