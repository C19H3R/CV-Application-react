import React from "react";
import PrintIcon from "@mui/icons-material/Print";

const PreviewPage = ({ data }) => {
   const {
      firstName,
      lastName,
      title,
      photo,
      address,
      phoneNumber,
      Email,
      Description,
      Experience,
      Education,
   } = data;

   return (
      <div id="preview-page">
         <div className="page-header">
            <span>Preview Page</span>
            <button
               style={{ background: "none", border: "0px" }}
               onClick={() => window.print()}
            >
               <PrintIcon />
            </button>
         </div>
         <div id="main-cv">
            <div id="cv-header">
               <span>{firstName + " " + lastName}</span>
               <span>{title}</span>
            </div>
            <div id="cv-info">
               <div id="cv-info-left">
                  <div>
                     <span>Description</span>
                     <p>{Description}</p>
                  </div>
                  <div>
                     <span>Experience</span>
                     {Experience.map((exp, idx) => (
                        <React.Fragment key={idx}>
                           <div className="exp-div">
                              <span>
                                 {new Date(exp.from).getFullYear() +
                                    " - " +
                                    new Date(exp.to).getFullYear()}
                              </span>
                              <div>
                                 <span>{exp.company}</span>
                                 <span>{exp.position}</span>
                                 <span>{exp.city}</span>
                              </div>
                           </div>
                        </React.Fragment>
                     ))}
                  </div>
                  <div>
                     <span>Education</span>
                     {Education.map((obj, idx) => (
                        <React.Fragment key={idx}>
                           <div className="edu-div">
                              <span>
                                 {new Date(obj.from).getFullYear() +
                                    " - " +
                                    new Date(obj.to).getFullYear()}
                              </span>
                              <div>
                                 <span>{obj.school}</span>
                                 <span>{obj.city}</span>
                                 <span>Subject: {obj.Core}</span>
                              </div>
                           </div>
                        </React.Fragment>
                     ))}
                  </div>
               </div>
               <div id="cv-info-right">
                  <div id="profile-pic-div">
                     <img src={photo} alt="Profile Pic" />
                  </div>
                  <div id="personal-info">
                     <span>Personal Details</span>
                     <span>Address</span>
                     <p>{address}</p>
                     <span>Phone Number</span>
                     <p>{phoneNumber}</p>
                     <span>Email</span>
                     <p>{Email}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PreviewPage;
