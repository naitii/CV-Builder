import React, { useState } from "react";
import data from "./data";
import { useRef } from "react";
import CvPreview from "./livePreview";
import html2canvas from "html2canvas";
import DownloadIcon from "./assets/download.svg";

export const MainBody = () => {

  //save button
  const componentRef = useRef();

  const downloadImage = async () => {
    const canvas = await html2canvas(componentRef.current, {
      logging: true,
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = "download.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  //initializing the data value
  const [currData, setCurrData] = useState(data);

  //personal-data block
  const changeFName = (e) => {
    setCurrData({ ...currData, firstName: e.target.value });
  };
  const changeLName = (e) => {
    setCurrData({ ...currData, lastName: e.target.value });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCurrData({...currData, imagePath: imageUrl})
    }
  };
  const handleJobProfile = (e) => {
    setCurrData({ ...currData, jobProfile: e.target.value });
  };
  const handleObj = (e) => {
    setCurrData({ ...currData, description: e.target.value });
  };

  //contact details block
  const handleMobNo = (e) => {
    setCurrData({ ...currData, phoneNo: e.target.value });
  };
  const handleMail = (e) => {
    setCurrData({ ...currData, mail: e.target.value });
  };
  const handleAddress = (e) => {
    setCurrData({ ...currData, place: e.target.value });
  };
  const handleLink = (e) => {
    setCurrData({ ...currData, link: e.target.value });
  };

  //education block
  const handleSchool = (e) => {
    setCurrData({ ...currData, school: e.target.value });
  };
  const handleDegree = (e) => {
    setCurrData({ ...currData, degree: e.target.value });
  };
  const handleYear = (e) => {
    setCurrData({ ...currData, gradYear: e.target.value });
  };
  const handle12 = (e) => {
    setCurrData({ ...currData, twelth: e.target.value });
  };
  const handle10 = (e) => {
    setCurrData({ ...currData, tenth: e.target.value });
  };

  //skills
  const [useStateSkills, setSkills] = useState(data.skills);
  const addSkill = () => {
    const newSkills = [...useStateSkills, ""];
    setSkills(newSkills);
  };
  const handleSkill = (e, id) => {
    const updatedSkills = [...useStateSkills];
    updatedSkills[id] = e.target.value;
    setSkills(updatedSkills);
    setCurrData({ ...currData, skills: updatedSkills });
  };
  const handleDelete = (id) => {
    const afterDel = [...useStateSkills];
    afterDel.splice(id, 1);
    setSkills(afterDel);
    setCurrData({ ...currData, skills: afterDel });
  };

  //projects
  const [project, setProject] = useState(data.projects);
  const addProj = () => {
    const obj = {
      projName: "",
      projInfo: "",
    };
    const projectList = [...project, obj];
    setProject(projectList);
  };
  const handleProjName = (e, id) => {
    const updateProj = [...project];
    updateProj[id].projName = e.target.value;
    setProject(updateProj);
    setCurrData({ ...currData, projects: updateProj });
  };
  const handleProjDes = (e, id) => {
    const updateProj = [...project];
    updateProj[id].projInfo = e.target.value;
    setProject(updateProj);
    setCurrData({ ...currData, projects: updateProj });
    console.log(currData);
  };

  //experience
  const [exp, setExp] = useState(data.experience);
  const addExp = () => {
    const obj = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    const newExp = [...exp, obj];
    setExp(newExp);
  };
  const handleCompany = (e, id) => {
    const updateExpC = [...exp];
    updateExpC[id].company = e.target.value;
    setExp(updateExpC);
    setCurrData({ ...currData, experience: updateExpC });
  };
  const handlePosition = (e, id) => {
    const updateExpC = [...exp];
    updateExpC[id].position = e.target.value;
    setExp(updateExpC);
    setCurrData({ ...currData, experience: updateExpC });
  };
  const handleStartDate = (e, id) => {
    const updateExpC = [...exp];
    updateExpC[id].startDate = e.target.value;
    setExp(updateExpC);
    setCurrData({ ...currData, experience: updateExpC });
  };
  const handleEndDate = (e, id) => {
    const updateExpC = [...exp];
    updateExpC[id].endDate = e.target.value;
    setExp(updateExpC);
    setCurrData({ ...currData, experience: updateExpC });
  };
  const handleRole = (e, id) => {
    const updateExpC = [...exp];
    updateExpC[id].description = e.target.value;
    setExp(updateExpC);
    setCurrData({ ...currData, experience: updateExpC });
  };

  //achievements
  const [achievements, setAchievements] = useState(data.achievements);
  const addAch = () => {
    const achievement = "";
    const newAchievement = [...achievements, achievement];
    setAchievements(newAchievement) 
  }
  const handleAchievement = (e,id) => {
    const updatedAchievement = [...achievements];
    updatedAchievement[id] = e.target.value;
    setAchievements(updatedAchievement);
    setCurrData({...currData, achievements: updatedAchievement});
  }

  //mainBody Return
  return (
    <>
      <div className="personInfoBox">
        <h2>Personal-Data</h2>
        <input type="text" placeholder="First Name" onChange={changeFName} />
        <input
          type="text"
          placeholder="Last Name"
          onChange={changeLName}
        ></input>
        <input
          type="text"
          className="longInput"
          placeholder="Job Profile"
          onChange={handleJobProfile}
        />
        <br></br>

        <span>Choose Profile photo</span>
        <input type="file" accept=".jpg" onChange={handleFileChange} />
        <br></br>

        <textarea
          placeholder="About you"
          maxLength="520"
          autoComplete="off"
          onChange={handleObj}
        />
      </div>
      <div className="personInfoBox">
        <h2>Contact Details</h2>
        <input
          type="text"
          placeholder="City/District"
          onChange={handleAddress}
        />
        <input type="tel" placeholder="Mobile no." onChange={handleMobNo} />
        <input
          type="mail"
          placeholder="E-mail Address."
          onChange={handleMail}
        />
        <input
          type="text"
          placeholder="Linkdin/ Github profile"
          onChange={handleLink}
        />
      </div>
      <div className="personInfoBox">
        <h2>Education</h2>
        <input
          type="text"
          className="longInput"
          placeholder="University/ College"
          onChange={handleSchool}
        ></input>
        <input
          type="text"
          className="longInput"
          placeholder="Degree"
          onChange={handleDegree}
        ></input>
        <input
          type="text"
          className="longInput"
          placeholder="Graduation Year"
          onChange={handleYear}
        ></input>
        <input
          type="text"
          placeholder="Class XII board & Grade"
          onChange={handle12}
        ></input>
        <input
          type="text"
          placeholder="Class X board & Grade"
          onChange={handle10}
        ></input>
      </div>

      <div className="personInfoBox">
        <h2>Skills</h2>
        <button style={{ margin: "20px" }} onClick={addSkill}>
          Add a Skill
        </button>
        {useStateSkills.map((skill, id) => {
          return (
            <div key={id}>
              <input
                value={skill}
                placeholder="Add a skill"
                type="text"
                onChange={(e) => handleSkill(e, id)}
              ></input>
              <button onClick={() => handleDelete(id)}>X</button>
            </div>
          );
        })}
      </div>
      <div className="personInfoBox">
        <h2>Projects</h2>
        <button style={{ margin: "20px" }} onClick={addProj}>
          Add Project
        </button>
        {project.map((proj, id) => {
          return (
            <div key={id} className="ExperienceBlock">
              <input
                type="text"
                value={proj.projName}
                className="longInput"
                placeholder="Project Name"
                onChange={(e) => handleProjName(e, id)}
              ></input>
              <textarea
                value={proj.projInfo}
                placeholder="Description about your Project"
                onChange={(e) => handleProjDes(e, id)}
                maxLength="1000"
                autoComplete="off"
              ></textarea>
            </div>
          );
        })}
      </div>
      <div className="personInfoBox">
        <h2>Work Experience</h2>
        <button style={{ margin: "20px" }} onClick={addExp}>
          Add Experience
        </button>
        {exp.map((experience, id) => {
          return (
            <div key={id} className="ExperienceBlock">
              <input
                type="text"
                className="longInput"
                placeholder="Company"
                onChange={(e) => handleCompany(e, id)}
                value={experience.company}
              ></input>
              <input
                type="text"
                value={experience.position}
                onChange={(e) => handlePosition(e, id)}
                className="longInput"
                placeholder="Position"
              ></input>
              <input
                type="text"
                placeholder="Start of Employment"
                onChange={(e) => handleStartDate(e, id)}
                value={experience.startDate}
              ></input>
              <input
                type="text"
                placeholder="End of Employment"
                onChange={(e) => handleEndDate(e, id)}
                value={experience.endDate}
              ></input>
              <textarea
                placeholder="Your Role in the Company"
                value={experience.description}
                onChange={(e) => handleRole(e, id)}
                maxLength="1000"
                autoComplete="off"
              ></textarea>
            </div>
          );
        })}
      </div>

      <div className="personInfoBox">
        <h2>Achievements</h2>
        <button style={{ margin: "20px" }} onClick={addAch}>
          Add achievement
        </button>
        {achievements.map((achievement, id) => {
          return (
            <div key={id} className="achievementBlock">
              <input
                type="text"
                className="longInput"
                placeholder="Write your achievement"
                onChange={(e) => handleAchievement(e, id)}
                value={achievement}
              ></input>
            </div>
          );
        })}
      </div>

      <div ref={componentRef}>
        <CvPreview id="pdf-content" data={currData} />
      </div>
      {/* <div className="save" onClick={downloadImage}>
        <img src={DownloadIcon} alt="Save" />
        <h4>Save</h4>
      </div> */}
    </>
  );
};
export default MainBody;
