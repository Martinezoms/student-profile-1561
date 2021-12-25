import { getData } from './Modules/module';
import { useState, useEffect } from 'react';
import './App.css';
import StudentCard from './Components/StudentCard';
import SearchInput from './Components/SearchInput';

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [filteredResult, setFilteredResult] = useState([]);

  useEffect(() => {
    getData().then((data) => setData(data.students));
  }, []);

  const searchItems = (searchValue) => {
    setInput(searchValue);
    if (input !== '') {
      const filteredData = data.filter((student) => {
        const name = student.firstName + student.lastName;
        return name.toLowerCase().includes(input.toLowerCase());
      });
      setFilteredResult(filteredData);
    } else {
      setFilteredResult(data);
    }
  };

  return (
    <>
      <SearchInput searchItems={searchItems} />
      <div className="main">
        <div>
          {input.length > 1
            ? filteredResult.map((student) => (
                <div>
                  <StudentCard key={student.id} {...student} />
                </div>
              ))
            : data.map((student) => (
                <div>
                  <StudentCard key={student.id} {...student} />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default App;
