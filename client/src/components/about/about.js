import "../ui/w3.css";
import "./about.css";

const About = () => {
  return (
    <div
      className="w3-container"
      style={{
        padding: "4% 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
      id="about"
    >
      <h1 className="w3-center">ABOUT CISC 322: Software Architecture</h1>
      <p className="w3-center w3-large">
        Destructure a massive software architecture of autonomous vehicles
      </p>
      <p style={{ padding: "0 25%" }}>
        <a
          style={{ color: "blue" }}
          href="https://github.com/ApolloAuto/apollo"
        >
          ApolloAuto
        </a>{" "}
        is a high-performance, flexible architecture which accelerates the
        development, testing, and deployment of Autonomous Vehicles, while also
        paving the way for people to understand self-driving and rapidly build
        their own complete autonomous driving systems. Apollo's key components
        are high precision maps, accurate to the centimeter level localization,
        neural network perception, predictive mobility, and planning as well as
        control. In this course, we will take a closer examination of how
        exactly this software is working and how it coordinates various
        components to collaborate.
      </p>

      <a
        className="github-background"
        href="https://github.com/ApolloAuto/apollo"
      >
        <img
          style={{
            height: "60%",
          }}
          src="https://opengraph.githubassets.com/1/ApolloAuto/apollo"
        ></img>
      </a>

      <h1 className="w3-center">Further readings and links</h1>
      <p className="w3-center w3-large">Readings</p>
      <p style={{ padding: "0 25%" }}>
        <a
          style={{ color: "blue" }}
          href="https://ieeexplore.ieee.org/abstract/document/9304810?casa_token=o27EW8UrOtoAAAAA:HxoZw0GN7OFFS87fbvfeIPABCFmfc9lZG4qz1JowqsfJrmiVHI_Mg77RwEYXddrRbFLhaJbbnEM"
        >
          Data Driven Prediction Architecture for Autonomous Driving and its
          Application on Apollo Platform
        </a>
        : In this paper, authors introduce a highly automated learning-based
        prediction model pipeline, which has been deployed on Baidu Apollo
        self-driving platform, to support different prediction learning
        sub-modules' data annotation, feature extraction, model training/tuning
        and deployment.
      </p>
      <p style={{ padding: "0 25%" }}>
        <a
          style={{ color: "blue" }}
          href="https://ieeexplore.ieee.org/document/9556323"
        >
          Enabling Unit Testing of Already-Integrated AI Software Systems: The
          Case of Apollo for Autonomous Driving
        </a>
        : Deploying those already-integrated software frameworks makes unit
        testing, a fundamental step in the validation process of critical
        software, very challenging in safety-critical systems. To tackle this
        issue, this paper shows the steps we followed to develop standalone
        versions of the modules in an industry-level autonomous driving
        framework (Apollo) by applying several modifications to its
        architectural design.
      </p>
      <p style={{ padding: "0 25%" }}>
        <a
          style={{ color: "blue" }}
          href="https://www.sciencedirect.com/science/article/abs/pii/S0950584915002177"
        >
          A functional reference architecture for autonomous driving
        </a>
        : introduction and reference architecture for the domain of autonomous
        driving.
      </p>
      <p style={{ padding: "0 25%" }}>
        <a
          style={{ color: "blue" }}
          href="https://www.sciencedirect.com/science/article/abs/pii/S0950584915002177"
        >
          Drift with Devil: Security of Multi-Sensor Fusion based Localization
          in High-Level Autonomous Driving under GPS Spoofing
        </a>
        : Authors design FusionRipper, a novel and general attack that
        opportunistically captures and exploits take-over vulnerabilities. They
        evaluate it on 6 real-world sensor traces, and find that FusionRipper
        can achieve at least 97% and 91.3% success rates in all traces for
        off-road and wrong-way attacks respectively.
      </p>
      <p style={{ padding: "0 25%" }}>
        <a
          style={{ color: "blue" }}
          href="https://fisher.wharton.upenn.edu/wp-content/uploads/2020/09/Thesis_Nova-Qiaochu-Guo.pdf"
        >
          Software System of Autonomous Vehicles: Architecture, Network and OS
        </a>
        : an undergraduate thesis covers the hardware side of things.
      </p>
      <p className="w3-center w3-large">Links</p>
      <p style={{ padding: "0 25%" }}>
        <a
          style={{ color: "blue" }}
          href="https://www.youtube.com/watch?v=opqtckENIs8"
        >
          Road test video
        </a>
        : In this road test, Apollo staffs put Apollo autonomous vehicle through
        a series of complex and unexpected road scenarios that would make many
        human drivers anxious and it handles them effortlessly.
      </p>
      <p style={{ padding: "0 25%" }}>
        <a
          style={{ color: "blue" }}
          href="https://www.neousys-tech.com/en/discover/fanless-in-vehicle-pc/baidu-apollo-open-source-autonomous-driving-platform"
        >
          What is Baidu's Apollo? Why Autonomous Driving Cars?
        </a>
        : In this road test, Apollo staffs put Apollo autonomous vehicle through
        a series of complex and unexpected road scenarios that would make many
        human drivers anxious and it handles them effortlessly.
      </p>
    </div>
  );
};

export default About;
