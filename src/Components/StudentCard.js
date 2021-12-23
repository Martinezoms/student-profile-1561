import { average } from '../Modules/module';

export default function StudentCard({ firstName, lastName, pic, email, company, skill, grades }) {
  return (
    <div>
      <img src={pic} alt="profile-img" />
      <h1>
        {firstName} {lastName}
      </h1>
      <p>Email: {email}</p>
      <p>Company: {company}</p>
      <p>Skill: {skill}</p>
      <p>Average: {average(grades)}%</p>
    </div>
  );
}
