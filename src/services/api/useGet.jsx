import { useState, useEffect, useRef } from "react";
import axios from "axios";

export const useGet = ( url ) => {

  
    
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);



  useEffect(  () => {

    setState({ data: null, loading: true, error: null });

    const sendRequest = async () => {

      if( isMounted.current ) {
        try {

          const data = await axios.get( url )

          setState({
            loading: false,
            error: null,
            data,
          });
        } catch (error) {

          setState({
            data: null,
            loading: false,
            error: "data could not be obtained",
          });

        }
      }

    }

    sendRequest()


  }, [url]);

  return state;
};
