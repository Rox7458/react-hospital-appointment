import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const PatientList = ({ patients, setPatients }) => {
  return (
    <div>
      {patients.map((patient) => (
        <div
          className={patient.isDone ? "trueStil" : "falseStyle"}
          key={patient.id}
        >
          <div>
            <h2>{patient.patientName}</h2>
            <h4>{patient.day}</h4>
            <h3>{patient.myDoctor}</h3>
          </div>
          <FaTimesCircle
            onClick={() =>
              setPatients(patients.filter((p) => p.id !== patient.id))
            }
            style={{ color: "red" }}
          />
        </div>
      ))}
    </div>
  );
};

export default PatientList;
