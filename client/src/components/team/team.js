import "../ui/w3.css";
import TeamCard from "../ui/teamCard";

const predefinedPersons = [
  {
    specialization: "Software Design",
    Name: "WanQing Li",
    headURL:
      "https://media-exp1.licdn.com/dms/image/C4E03AQEKAmUqS9TJeA/profile-displayphoto-shrink_400_400/0/1641998482654?e=1647475200&v=beta&t=T0LRcMDQBy4e9wdtNsFFHakZlucrWFhzwO6E6AOc7OY",
    introduction: "Hope we could have a fun semester together!",
    email: "mailto:eustinalwq@outlook.com?subject=subject",
    github: "eustinalwq@outlook.com",
    linkedIn: "https://www.linkedin.com/in/wanqing-li/",
  },
  {
    specialization: "Software Design",
    Name: "Amber Wang",
    headURL: "https://i.ibb.co/4JJBVvR/IMG-2711.jpg",
    introduction: "Stay true to yourself and keep moving.",
    email: "mailto:18jw113@queensu.ca?subject=subject",
    github: "https://github.com/AmberWJL",
    linkedIn: "https://www.linkedin.com/in/amber-w-931757165/",
  },
  {
    specialization: "Computing and Mathmatics",
    Name: "Feiting Yang",
    headURL:
      "https://i.postimg.cc/hG327tx5/2db9c8511eb87e4cf703b598d9bc08c.jpg",
    introduction: "Keep a dream for yourself.",
    email: "mailto:feitingy@gmail.com?subject=subject",
    github: "https://github.com/Feitingy",
    linkedIn: "https://www.linkedin.com/in/emma-yang-211a39224/",
  },
  {
    specialization: "Software Design",
    Name: "Huilin Xu",
    headURL: "https://i.postimg.cc/7hZsc3L5/IMG-7335-2.jpg",
    introduction: "Work hard play hard",
    email: "mailto:meghanxu2001@gmail.com?subject=subject",
    github: "https://github.com/Meghanxuxx",
    linkedIn: "https://www.linkedin.com/in/meghan-xu-b278071b6/",
  },
];

const Team = () => {
  const members = predefinedPersons.map((el) => {
    return (
      <TeamCard
        key={el.Name}
        specialization={el.specialization}
        Name={el.Name}
        headURL={el.headURL}
        introduction={el.introduction}
        email={el.email}
        github={el.github}
        linkedIn={el.linkedIn}
      />
    );
  });
  return (
    <div className="w3-container" style={{ padding: "128px 16px" }} id="team">
      <h3 className="w3-center">THE TEAM</h3>
      <p className="w3-center w3-large">We are passionate Queen's students.</p>
      <div className="w3-row-padding" style={{ marginTop: "64px" }}></div>
      {members}
    </div>
  );
};

export default Team;
