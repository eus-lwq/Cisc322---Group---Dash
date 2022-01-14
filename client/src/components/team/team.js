import "../ui/w3.css";
import TeamCard from "../ui/teamCard";

const predefinedPersons = [
  {
    specialization: "Software Design",
    Name: "WanQing",
    headURL:
      "https://media-exp1.licdn.com/dms/image/C4E03AQEKAmUqS9TJeA/profile-displayphoto-shrink_400_400/0/1641998482654?e=1647475200&v=beta&t=T0LRcMDQBy4e9wdtNsFFHakZlucrWFhzwO6E6AOc7OY",
    introduction: "Hope we could have a fun semester together!",
    email: "mailto:eustinalwq@outlook.com",
    github: "eustinalwq@outlook.com",
    linkedIn: "https://www.linkedin.com/in/wanqing-li/",
  },
  {
    specialization: "Computing and Mathmatics",
    Name: "Amber",
    headURL: "https://i.ibb.co/4JJBVvR/IMG-2711.jpg",
    introduction: "Stay true to yourself and keep moving.",
    email: "mailto:18jw113@queensu.ca",
    github: "https://github.com/AmberWJL",
    linkedIn: "https://www.linkedin.com/in/amber-w-931757165/",
  },
  {
    specialization: "Data Analytics",
    Name: "Emma",
    headURL:
      "https://i.postimg.cc/hG327tx5/2db9c8511eb87e4cf703b598d9bc08c.jpg",
    introduction: "Keep a dream for yourself.",
    email: "mailto:feitingy@gmail.com",
    github: "https://github.com/Feitingy",
    linkedIn: "https://www.linkedin.com/in/emma-yang-211a39224/",
  },
  {
    specialization: "Software Design",
    Name: "Meghan",
    headURL: "https://i.postimg.cc/7hZsc3L5/IMG-7335-2.jpg",
    introduction: "Work hard play hard",
    email: "mailto:meghanxu2001@gmail.com",
    github: "https://github.com/Meghanxuxx",
    linkedIn: "https://www.linkedin.com/in/meghan-xu-b278071b6/",
  },
  {
    specialization: "Computing and Mathmatics",
    Name: "Yiming",
    headURL: "https://s2.loli.net/2022/01/14/oltjmvHyDJNcrIQ.png",
    introduction: "Don't cry, Alfred! I need all my courage to die at twenty!",
    email: "mailto:zhaoyiming2000@gmail.com",
    github: "https://github.com/Meghanxuxx",
    linkedIn: "https://www.linkedin.com/in/meghan-xu-b278071b6/",
  },
  {
    specialization: "Software Design",
    Name: "Lu",
    headURL:
      "https://i.pinimg.com/564x/1a/37/11/1a37116f89f85fc588272ad568a77fff.jpg",
    introduction: "Just code it!",
    email: "mailto:chen1968493689@gmail.com",
    github: "https://github.com/LuCC-que",
    linkedIn: "https://www.linkedin.com/in/loo-c-47a16a207/",
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
