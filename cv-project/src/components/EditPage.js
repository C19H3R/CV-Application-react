import React, { useState } from "react";

const EditPage = () => {
   const [experienceFirms, setExperienceFirms] = useState(1);
   const addExp = () => {
      setExperienceFirms(experienceFirms + 1);
   };
   return (
      <div>
         <div>
            <span>Title</span>
            {/* ICON */}
         </div>
         <div>
            <div>
               <span>Personal Info</span>
               <input placeholder="First Name" />
               <input placeholder="Last Name" />
               <input placeholder="Title" />
               <label>
                  <input type="file" />
                  Photo
               </label>
               <input placeholder="Address" />
               <input placeholder="Phone Number" />
               <input placeholder="Email" />
               <textarea style={{ resize: "none" }} placeholder="Description" />
            </div>
            <div>
               <span>Experience</span>
               <>
                  <input placeholder="Position" />
                  <input placeholder="Company" />
                  <input placeholder="City" />
                  <input placeholder="From" type="date" />
                  <input placeholder="To" type="date" />
                  <button>Delete</button>
               </>
               <button onClick={addExp}>Add</button>
            </div>
            <div>
               <span>Education</span>
               <>
                  <input placeholder="University/School Name" />
                  <input placeholder="City" />
                  <input placeholder="Education level" />
                  <input placeholder="Core" />
                  <input placeholder="From" type="date" />
                  <input placeholder="To" type="date" />
                  <button>Delete</button>
               </>
               <button onClick={addExp}>Add</button>
            </div>
         </div>
      </div>
   );
};

export default EditPage;
