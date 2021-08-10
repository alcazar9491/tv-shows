import React, { useContext} from 'react';
import { TvShowContext } from '../context/TvShowContext';
import { TvShow } from './TvShow';




export const List = () => {


    const {
        TvShowState
    } = useContext( TvShowContext )


    return (
        <div className="list-container" >
            {
                TvShowState.TvShowList.length > 0 &&
                TvShowState.TvShowList.filter( e => !TvShowState.favorites ?
                                                     e.name.toLowerCase().includes( TvShowState.filter.toLowerCase() )
                                                     : ( e.favorite === true && e.name.toLowerCase().includes( TvShowState.filter.toLowerCase() ) )
                                                      ).map( element => <TvShow key={ element.id } element={ element } />)
            }
        </div>
    )
}
