import { useState } from 'react';
import { average } from '../Modules/module';
import '../App.css';

export default function StudentCard({
  id,
  firstName,
  lastName,
  pic,
  email,
  company,
  skill,
  grades,
  students,
  tags,
  setData
}) {
  const [open, setOpen] = useState(false);

  const [tagInput, setTagInput] = useState('');

  const toggleBtn = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const addTagHandler = (e) => {
    e.preventDefault();
    const newStudents = students.map((student) => {
      if (student.id === id && tagInput !== '') {
        student.tags = [...student.tags, tagInput];
      }
      return student;
    });
    setData(newStudents);
    setTagInput('');
  };

  return (
    <div>
      <div className="container">
        <div className="student-card">
          <div className="student-sub-card">
            <div>
              <button className="button" onClick={() => toggleBtn()}>
                {open === false ? '+' : '='}
              </button>
            </div>
            <div>
              <img src={pic} alt="profile-img" />
            </div>
            <div>
              <h1>
                {firstName} {lastName}
              </h1>
              <p>Email: {email}</p>
              <p>Company: {company}</p>
              <p>Skill: {skill}</p>
              <p>Average: {average(grades)}%</p>
            </div>
          </div>
          <div className="tag">
            <ul>
              {tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))}
            </ul>
            <form onSubmit={addTagHandler}>
              <input
                type="text"
                placeholder="Add a tag"
                className="tag-input"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
              />
            </form>
          </div>
          <div className={open === false ? 'test-close' : 'test'}>
            {grades.map((score, i) => (
              <p key={i}>
                Test{i + 1}: <span className="score">{score}%</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
