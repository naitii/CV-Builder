/* eslint-disable react/prop-types */
import React from "react";

const CvPreview = ({ data }, {bg}) => {
  return (
    <div className="preview" style={{ backgroungColor: bg }}>
      <div className="leftPanel">
        <div className="profilePhoto">
          <img src={data && data.imagePath} className="photo" alt="Profile" />
        </div>
        <h2 className="heading" style={{ color: "white" }}>
          Education:
        </h2>
        <h3 className="education">{data && data.school}</h3>
        <h3 className="education">{data && data.degree}</h3>
        <h3 className="education">Graduation Year: {data && data.gradYear}</h3>
        <br></br>
        <h3 className="education">Class XII, {data && data.twelth}</h3>
        <h3 className="education">Class X, {data && data.tenth}</h3>

        {data?.skills?.length > 0 && (
          <h2 className="heading" style={{ color: "white", marginTop: "20px" }}>
            Skills:
          </h2>
        )}

        <div className="skill">
          {data?.skills?.map((skill, id) => (
            <span className="skillName" key={id}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="rightPanel">
        <h1 className="NAME">
          {data && data.firstName} {data && data.lastName}
        </h1>
        <h2 className="JOBprofile">{data && data.jobProfile}</h2>

        <div className="contactPreview">
          <div className="contactSplitter">
            <svg
              className="icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                className="icons"
                fill="#418240"
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              />
            </svg>

            <span className="contantSpan">{data && data.phoneNo}</span>
          </div>
          <div className="contactSplitter">
            <svg
              className="icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                className="icons"
                fill="#428141"
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </svg>

            <span className="contantSpan">{data && data.place}</span>
          </div>
          <div className="contactSplitter">
            <svg
              className="icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                className="icons"
                fill="#33753b"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>

            <span className="contantSpan">{data && data.mail}</span>
          </div>
          <div className="contactSplitter">
            <svg
              className="icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                className="icons"
                fill="#288633"
                d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
              />
            </svg>

            <a
              className="contantSpan"
              href={"https://www." + (data && data.link)}
            >
              {data?.link?.includes("linkedin")
                ? "LinkedIn"
                : data?.link?.includes("github")
                ? "Github"
                : data && data.link}
            </a>
          </div>
        </div>
        <div className="descriptionPreview">
          <h2 className="heading">Profile</h2>
          <p>{data && data.description}</p>
        </div>
        <div>
          {data?.experience?.length > 0 && (
            <h2 className="heading">Work Experience</h2>
          )}

          <div className="ExperiencesBox">
            {data?.experience?.map((exp, index) => (
              <div className="experience" key={index}>
                <div>
                  <span className="fomTO">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <div>
                  {data?.experience?.length > 0 && (
                    <strong>{exp.position}</strong>
                  )}
                  <h2 className="company">{exp.company}</h2>
                  <p className="jobDesc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
          {data?.projects?.length > 0 && (
            <h2 className="heading">Key Projects</h2>
          )}
          <div className="ProjBox">
            {data?.projects?.map((proj, index) => (
              <div className="projects" key={index}>
                <h2 className="projName">{proj.projName}</h2>
                <p>{proj.projInfo}</p>
              </div>
            ))}
            {data?.achievements?.length > 0 && (
              <h2 className="heading">Achievements</h2>
            )}
            <div className="AchiveBox">
              {data?.achievements?.map((achieve, id) => (
                <li className="achievement" key={id}>
                  {achieve}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvPreview;
