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
        is a massive software for developing autonomous driving, it has powerful
        perfomance, and high modification ability. It allows user efficently
        develop their own autonomous driving software based on it. Inside this
        software, it contains high precision maps, accurate to the centimeter
        level localization, neural network perception, predictive mobility, and
        planning as well as control. In this course, we will take a closer
        examination of how exactly this software is working and how it
        coordinates various components to collaborate.
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
      </p>
      <p style={{ padding: "0 25%" }}>
        <a
          style={{ color: "blue" }}
          href="https://ieeexplore.ieee.org/document/9556323"
        >
          Enabling Unit Testing of Already-Integrated AI Software Systems: The
          Case of Apollo for Autonomous Driving
        </a>
      </p>
      <p style={{ padding: "0 25%" }}>
        <a
          style={{ color: "blue" }}
          href="https://www.sciencedirect.com/science/article/abs/pii/S0950584915002177"
        >
          A functional reference architecture for autonomous driving
        </a>
      </p>
      <p style={{ padding: "0 25%" }}>
        <a
          style={{ color: "blue" }}
          href="https://www.sciencedirect.com/science/article/abs/pii/S0950584915002177"
        >
          Drift with Devil: Security of Multi-Sensor Fusion based Localization
          in High-Level Autonomous Driving under GPS Spoofing
        </a>
      </p>
      <p style={{ padding: "0 25%" }}>
        <a
          style={{ color: "blue" }}
          href="https://fisher.wharton.upenn.edu/wp-content/uploads/2020/09/Thesis_Nova-Qiaochu-Guo.pdf"
        >
          Software System of Autonomous Vehicles: Architecture, Network and OS
        </a>
      </p>
      <p className="w3-center w3-large">Links</p>
      <p style={{ padding: "0 25%" }}>
        <a
          style={{ color: "blue" }}
          href="https://www.youtube.com/watch?v=opqtckENIs8"
        >
          Road test video
        </a>
      </p>
      <p style={{ padding: "0 25%" }}>
        <a
          style={{ color: "blue" }}
          href="https://www.neousys-tech.com/en/discover/fanless-in-vehicle-pc/baidu-apollo-open-source-autonomous-driving-platform"
        >
          What is Baidu's Apollo? Why Autonomous Driving Cars?
        </a>
      </p>
      <p className="w3-center w3-large">References</p>
      <p style={{ padding: "0 25%" }}>
        Xu, Xiao, X., Miao, J., & Luo, Q. (2020). Data Driven Prediction
        Architecture for Autonomous Driving and its Application on Apollo
        Platform.
      </p>
      <p style={{ padding: "0 25%" }}>
        M. Alcon, H. Tabani, J. Abella and F. J. Cazorla, "Enabling Unit Testing
        of Already-Integrated AI Software Systems: The Case of Apollo for
        Autonomous Driving," 2021 24th Euromicro Conference on Digital System
        Design (DSD), 2021, pp. 426-433, doi: 10.1109/DSD53832.2021.00071.
      </p>
      <p style={{ padding: "0 25%" }}>
        Behere, & Törngren, M. (2016). A functional reference architecture for
        autonomous driving. Information and Software Technology, 73(C), 136–150.
        https://doi.org/10.1016/j.infsof.2015.12.008
      </p>
      <p style={{ padding: "0 25%" }}>
        Shen, Won, J. Y., Chen, Z., & Chen, Q. A. (2020). Drift with Devil:
        Security of Multi-Sensor Fusion based Localization in High-Level
        Autonomous Driving under GPS Spoofing (Extended Version).
      </p>
      <p style={{ padding: "0 25%" }}>
        Gordon. (2021). Autonomous Vehicle Interaction Control Software and
        Smart Sustainable Urban Mobility Behaviors in Network Connectivity
        Systems. Contemporary Readings in Law and Social Justice, 13(1), 40–49.
        https://doi.org/10.22381/CRLSJ13120214
      </p>
    </div>
  );
};

export default About;
