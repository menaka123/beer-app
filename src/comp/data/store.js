import React, {useEffect, useState} from "react";
import axios from 'axios';

export const DataContext = React.createContext();

export const DataProvider = ({children}) => {
    const [beerList, setBeerList] = useState([]);

    useEffect(() => {
        let isMounted = true;

        isMounted && axios.get('https://api.punkapi.com/v2/beers')
            .then(res => {
                setBeerList(res.data);
            });

        return () => {
            isMounted = false
        }
    }, []);

    return (
        <DataContext.Provider
            value={{
                beerList
            }}
        >
            {children}
        </DataContext.Provider>
    );
};