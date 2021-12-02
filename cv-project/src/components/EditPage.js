import React from "react";
import CachedIcon from "@mui/icons-material/Cached";
const EditPage = ({ setData, data }) => {
   const resetData = () => {
      setData({
         firstName: "",
         lastName: "",
         title: "",
         photo: "ASDF",
         address: "",
         phoneNumber: "",
         Email: "",
         Description: "",
         Experience: [
            {
               position: "",
               company: "",
               city: "",
               from: "",
               to: "",
            },
         ],
         Education: [
            {
               school: "",
               city: "",
               level: "",
               Core: "",
               from: "",
               to: "",
            },
         ],
      });
   };

   console.log(data);
   const {
      firstName,
      lastName,
      title,
      address,
      phoneNumber,
      Email,
      Description,
      Experience,
      Education,
   } = data;
   console.log(Experience);
   return (
      <div id="edit-page">
         <div className="page-header">
            <span>Title</span>
            <button
               onClick={resetData}
               style={{ background: "none", border: "0px" }}
            >
               <CachedIcon />
            </button>
         </div>
         <div id="inputs-container">
            <div className="edit-info-container">
               <span>Personal Info</span>
               <input
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => {
                     setData({ ...data, firstName: e.target.value });
                  }}
               />
               <input
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => {
                     setData({ ...data, lastName: e.target.value });
                  }}
               />
               <input
                  placeholder="Title"
                  value={title}
                  onChange={(e) => {
                     setData({ ...data, title: e.target.value });
                  }}
               />
               <label>
                  Photo
                  <input
                     type="file"
                     accept="image/*,.pdf"
                     style={{ marginLeft: "20px" }}
                     onChange={(e) => {
                        const reader = new FileReader();
                        reader.onload = (evnt) => {
                           setData({ ...data, photo: evnt.target.result });
                        };
                        reader.readAsDataURL(e.target.files[0]);
                     }}
                  />
               </label>
               <input
                  placeholder="Address"
                  value={address}
                  onChange={(e) => {
                     setData({ ...data, address: e.target.value });
                  }}
               />
               <input
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => {
                     setData({ ...data, phoneNumber: e.target.value });
                  }}
               />
               <input
                  placeholder="Email"
                  value={Email}
                  onChange={(e) => {
                     setData({ ...data, Email: e.target.value });
                  }}
               />
               <textarea
                  style={{ resize: "none" }}
                  placeholder="Description"
                  value={Description}
                  onChange={(e) => {
                     setData({ ...data, Description: e.target.value });
                  }}
               />
            </div>
            <div className="edit-info-container">
               <span>Experience</span>
               {Experience.map((itm, idx) => (
                  <React.Fragment key={idx}>
                     <input
                        placeholder="Position"
                        value={itm.position}
                        onChange={(e) => {
                           Experience[idx] = {
                              ...Experience[idx],
                              position: e.target.value,
                           };
                           setData({ ...data, Experience });
                        }}
                     />
                     <input
                        placeholder="Company"
                        value={itm.company}
                        onChange={(e) => {
                           Experience[idx] = {
                              ...Experience[idx],
                              company: e.target.value,
                           };
                           setData({ ...data, Experience });
                        }}
                     />
                     <input
                        placeholder="City"
                        value={itm.city}
                        onChange={(e) => {
                           Experience[idx] = {
                              ...Experience[idx],
                              city: e.target.value,
                           };
                           setData({ ...data, Experience });
                        }}
                     />
                     <input
                        placeholder="From"
                        type="date"
                        value={itm.from}
                        onChange={(e) => {
                           Experience[idx] = {
                              ...Experience[idx],
                              from: e.target.value,
                           };
                           setData({ ...data, Experience });
                        }}
                     />
                     <input
                        placeholder="To"
                        type="date"
                        value={itm.to}
                        onChange={(e) => {
                           Experience[idx] = {
                              ...Experience[idx],
                              to: e.target.value,
                           };
                           console.log(Experience[idx]);
                           setData({ ...data, Experience });
                        }}
                     />
                     <button
                        className="delete-btn"
                        onClick={() => {
                           const tmpExp = Experience.filter((val, i) => {
                              console.log(i !== idx);
                              return i !== idx;
                           });
                           console.log("AFTER FILER ", tmpExp);
                           setData({ ...data, Experience: tmpExp });
                        }}
                     >
                        Delete
                     </button>
                  </React.Fragment>
               ))}
               <button
                  className="add-btn"
                  onClick={() => {
                     setData({
                        ...data,
                        Experience: [
                           ...Experience,
                           {
                              position: "asdf",
                              company: "asdf",
                              city: "asdf",
                              from: "asdf",
                              to: "asdf",
                           },
                        ],
                     });
                  }}
               >
                  Add
               </button>
            </div>
            <div className="edit-info-container">
               <span>Education</span>
               {Education.map((edu, idx) => (
                  <React.Fragment>
                     <input
                        placeholder="University/School Name"
                        value={edu.school}
                        onChange={(e) => {
                           Education[idx] = {
                              ...Education[idx],
                              school: e.target.value,
                           };
                           setData({ ...data, Education });
                        }}
                     />
                     <input
                        placeholder="City"
                        value={edu.city}
                        onChange={(e) => {
                           Education[idx] = {
                              ...Education[idx],
                              city: e.target.value,
                           };
                           setData({ ...data, Education });
                        }}
                     />
                     <input
                        placeholder="Education level"
                        value={edu.level}
                        onChange={(e) => {
                           Education[idx] = {
                              ...Education[idx],
                              level: e.target.value,
                           };
                           setData({ ...data, Education });
                        }}
                     />
                     <input
                        placeholder="Core"
                        value={edu.Core}
                        onChange={(e) => {
                           Education[idx] = {
                              ...Education[idx],
                              Core: e.target.value,
                           };
                           setData({ ...data, Education });
                        }}
                     />
                     <input
                        placeholder="From"
                        type="date"
                        value={edu.from}
                        onChange={(e) => {
                           Education[idx] = {
                              ...Education[idx],
                              from: e.target.value,
                           };
                           setData({ ...data, Education });
                        }}
                     />
                     <input
                        placeholder="To"
                        type="date"
                        value={edu.to}
                        onChange={(e) => {
                           Education[idx] = {
                              ...Education[idx],
                              to: e.target.value,
                           };
                           setData({ ...data, Education });
                        }}
                     />
                     <button
                        className="delete-btn"
                        onClick={() => {
                           const tmpEdu = Education.filter(
                              (val, i) => i !== idx
                           );
                           setData({ ...data, Education: tmpEdu });
                        }}
                     >
                        Delete
                     </button>
                  </React.Fragment>
               ))}
               <button
                  className="add-btn"
                  onClick={() => {
                     setData({
                        ...data,
                        Education: [
                           ...Education,
                           {
                              school: "",
                              city: "",
                              level: "",
                              Core: "",
                              from: "",
                              to: "",
                           },
                        ],
                     });
                  }}
               >
                  Add
               </button>
            </div>
         </div>
      </div>
   );
};

export default EditPage;
