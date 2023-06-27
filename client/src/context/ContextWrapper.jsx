// import react
import { useEffect, useState } from "react";

// import GlobalContect
import GlobalContext from "./GlobalContext";

// import firestore
import { db } from '../firebase-config'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'


const ContextWrapper = (props) => {
    const [showChart, setShowChart] = useState(false)
    const [offices, setOffices] = useState([])
    const [selectOffice, setSelectOffice] = useState(null)
    const [attendances, setAttendances] = useState([])
    const [showAddOffice, setShowAddOffice] = useState(false)
    const [showAddAttendance, setShowAddAttendance] = useState(false)

    const officesCollectionRef = collection(db, '/office')

    useEffect(() => {

      const getOffices = async () => {
        const test = query(officesCollectionRef, orderBy('city'))
        const data = await getDocs(test);
        setOffices(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      };

      getOffices()
    }, [selectOffice, showAddOffice])

    
    useEffect(() => {
      if (selectOffice) {
        const database = collection(db, `/office/${selectOffice.id}/attendance`);
        const getAttendances = async () => {
          const test = query(database, orderBy('date'))
          const data = await getDocs(test);
          setAttendances(data.docs.map((doc) => ({...doc.data()})));
  
        };
  
        getAttendances()
      }

    }, [selectOffice, showAddAttendance])

  return (
    <GlobalContext.Provider
        value={{
            showChart,
            setShowChart,
            offices,
            selectOffice,
            setSelectOffice,
            attendances,
            setAttendances,
            showAddOffice,
            setShowAddOffice,
            showAddAttendance,
            setShowAddAttendance

        }}
    >
        {props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper