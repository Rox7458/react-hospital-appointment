import React, { useState } from "react";
import { patientData, doctorData } from "../helper/Data";
import AddPatient from "../components/AddPatient";
import PatientList from "../components/PatientList";

const Home = () => {
  //! variables
  let [doctors, setDoctors] = useState(doctorData);
  const [patients, setPatients] = useState(patientData);
  const [flag, setFlag] = useState(true);

  //! functions
  const doctorClick = (dId) => {
    doctors = doctors.filter((d) => d.id === dId);
    setDoctors(doctors);

    setFlag(false);

    setPatients(patients.filter((p) => p.myDoctor === doctors[0].doctorName));
  };

  return (
    <div style={{ display: flag ? "block" : "flex" }}>
      <div>
        <header>
          <h1>HOSPITAL</h1>
          <div className="dr">
            {doctors.map((dr) => (
              <div key={dr.id}>
                <img
                  onClick={() => doctorClick(dr.id)}
                  className="doctorBtn"
                  style={{
                    background: flag ? "aqua" : "lightgreen",
                  }}
                  src={dr.doctorImg}
                  alt=""
                  width="180px"
                  height="150px"
                />
                <h4
                  style={{
                    background: flag ? "aqua" : "lightgreen",
                    borderLeft: flag ? "10px solid blue" : "10px solid green",
                  }}
                >
                  {dr.doctorName}
                </h4>
              </div>
            ))}
          </div>
        </header>

        {!flag && (
          <AddPatient
            patients={patients}
            setPatients={setPatients}
            doctors={doctors}
          />
        )}
      </div>

      <PatientList patients={patients} setPatients={setPatients} />
    </div>
  );
};

export default Home;
