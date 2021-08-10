import { useMemo, useReducer, useEffect } from 'react'
import { TvShowContext, InitTvShowContext } from './context/TvShowContext';
import { TvShowReducer } from './context/TvShowReducer';
import { TvShowTypes } from './context/TvShowTypes';
import { useGet } from './services/api/useGet';
import { TvShows } from './components/TvShows';

function App() {


  const [ TvShowState, TvShowDispatch ] = useReducer( TvShowReducer, InitTvShowContext );

  const State = useMemo(
    () => ({
      TvShowState,
      TvShowDispatch,
    }),
    [ TvShowState, TvShowDispatch ]
  );

  const { data } = useGet(`http://api.tvmaze.com/shows`);

  useEffect(() => {

    if( data?.data.length > 0 ) {

        TvShowDispatch({
          type:TvShowTypes.loadData,
          payload: data.data[0].favorite ? data.data : data.data.map( element => ( { ...element, favorite:false } ))
        })

    }

  }, [ data ]);




  return (
    <TvShowContext.Provider value={ State }> 
        <TvShows />
    </TvShowContext.Provider>
  );
}

export default App;
