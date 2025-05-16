import React, { useState } from "react";

const AddPatient = ({ patients, setPatients, doctors }) => {
  //! variables
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  //! functions
  const handleSubmit = (e) => {
    e.preventDefault();

    setPatients([
      ...patients,
      {
        id: patients.length + 1,
        patientName: name,
        day: date,
        isDone: false,
        myDoctor: doctors[0].doctorName,
      },
    ]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Patient Information</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor=""> Day & Time</label>
          <input
            type="datetime-local"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <button className="saveBtn" type="submit">
            create a reservation for <span>{doctors[0].doctorName} </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
