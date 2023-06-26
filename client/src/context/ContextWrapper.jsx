import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const ContextWrapper = (props) => {
    const [showChart, setShowChart] = useState(false)

  return (
    <GlobalContext.Provider
        value={{
            showChart,
            setShowChart
        }}
    >
        {props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper