import React from "react";

const GlobalContext = React.createContext({
    showChart: false,
    setShowChart: () => {}
})

export default GlobalContext