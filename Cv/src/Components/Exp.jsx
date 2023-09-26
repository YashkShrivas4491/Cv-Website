import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faOsi } from "@fortawesome/free-brands-svg-icons";

const Exp = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          contentStyle={{
            background:
              "linear-gradient(43deg, #4158d0, #c850c0 46%, #ffcc70 100%)",
            color: "white",
          }}
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSchool} />}
        >
          <h3 className="vertical-timeline-element-title">
            Kendriya Vidyalaya S.E.C.L Kusmunda , Korba
          </h3>
          <p> High School 10th Class</p>
          <h4>CGPA : 9 </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background:
              "linear-gradient(43deg, #4158d0, #c850c0 46%, #ffcc70 100%)",
            color: "white",
          }}
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSchool} />}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kendriya Vidyalaya S.E.C.L Kusmunda , Korba
          </h3>
          <p> Higher Senior Secondary School 12th Class</p>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Bachelors Degree
          </h4> */}

          <p>PCM</p>
          <h4>Percentage: 80%</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background:
              "linear-gradient(43deg, #4158d0, #c850c0 46%, #ffcc70 100%)",
            color: "white",
          }}
          className="vertical-timeline-element--work"
          date="2019 - 2023"
          iconStyle={{ background: "#e9d35b", color: "black" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">
            Bhilai Institute Of Technology Durg , CG
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            B.Tech (Information Technology)
          </h4>
          {/* <p>Developed the backend infrastructure for 3 projects.</p> */}
          <p>CGPA : 8.91</p>
          <h4>Percentage : 83.96%</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            background:
              "linear-gradient(43deg, #4158d0, #c850c0 46%, #ffcc70 100%)",
            color: "white",
          }}
          className="vertical-timeline-element--work"
          date="2023 May - 2023 Aug"
          iconStyle={{ background: "#e9d35b", color: "black" }}
          // icon={<WorkIcon />}
          icon={<FontAwesomeIcon icon={faOsi} />}
        >
          <h3 className="vertical-timeline-element-title">
            Open Source Contributor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            <ul>
              <li>Contributed in 6+ Repos</li>
              <li>Tech-Stack used : Html , CSS , JS</li>
              <li></li>
            </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Exp;
