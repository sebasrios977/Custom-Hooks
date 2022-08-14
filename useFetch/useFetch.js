
import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });
    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true
        });

        const ans = await fetch( url );
        const data = await ans.json();

        setState({
            data: data,
            isLoading: false,
            error: null
        })
    }

    
    useEffect(() => {

    getFetch();  
    
    }, [url])
    
  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error
  }
}
