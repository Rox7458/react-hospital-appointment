import React, { useState } from "react";
import { hastaData, doctorData } from "../helper/Data";
import AddPatient from "../components/AddPatient";
import PatientList from "../components/PatientList";

const Home = () => {

  let [doctors, setDoctors] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);

  return (
    <div>
      <div>
        <header>
          <h1>HOSPITAL</h1>
          <div></div>
        </header>

        {/* <AddPatient/> */}
      </div>

      <PatientList hastalar={hastalar} setHastalar={setHastalar} />
    </div>
  );
};

export default Home;
