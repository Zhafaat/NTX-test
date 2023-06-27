import React from "react";

const GlobalContext = React.createContext({
    showChart: false,
    setShowChart: () => {},
    offices: [],
    setOffices: () => {},
    selectOffice: null,
    setSelectOffice: () => {},
    attendances: [],
    setAttendances: () => {},
    showAddOffice: false,
    setShowAddOffice: () => {},
    showAddAttendance: false,
    setShowAddAttendance: () => {}
})

export default GlobalContext