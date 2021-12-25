import { useState } from 'react';
import { average } from '../Modules/module';
import '../App.css';

export default function StudentCard({ firstName, lastName, pic, email, company, skill, grades }) {
  const [open, setOpen] = useState(false);
  const toggleBtn = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
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
            <li>brown</li>
            <li>black</li>
          </ul>
          <input type="text" placeholder="Add a tag" className="tag-input" />
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
  );
}
