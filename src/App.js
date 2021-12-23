import { getData } from './Modules/module';
import { useState, useEffect } from 'react';
import './App.css';
import StudentCard from './Components/StudentCard';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((data) => setData(data.students));
  }, []);

  return (
    <div>
      {data.map((student) => (
        <StudentCard key={student.id} {...student} />
      ))}
    </div>
  );
}

export default App;
