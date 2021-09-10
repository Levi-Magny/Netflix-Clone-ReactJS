import React, { useState, createContext, useContext } from 'react';

const DetailContext = createContext();

export default function DetailProvider({ children }) {
    const [detail, setDetail] = useState({});
    return(
        <DetailContext.Provider
            value={{
                detail,
                setDetail
            }}
        >
            {children}
        </DetailContext.Provider>
    );
}

export function useDetail(){
    const context = useContext(DetailContext);
    const {detail, setDetail} = context;
    return {detail, setDetail};
}