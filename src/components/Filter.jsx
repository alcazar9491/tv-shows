import { useContext } from 'react';
import { TvShowContext } from '../context/TvShowContext';
import { TvShowTypes } from '../context/TvShowTypes';



export const Filter = () => {

    const { TvShowState, TvShowDispatch } = useContext( TvShowContext );


    return (
        <div className="filter-container">
            <div className="input-container">
                <input className="input-filter" type="text" name="filter"
                    value={ TvShowState.filter }
                    onChange={
                            ( { target } ) => TvShowDispatch({
                                type:TvShowTypes.inputChange,
                                payload: target.value
                            })
                    }
                />
            </div>
            <div className="btn-favorites-filter">
                {
                    <button className="btn-favorites" 
                    onClick={ () => TvShowDispatch( { 
                        type:TvShowTypes.toogleFavs
                     } ) }
                     >
                        { 
                            TvShowState.favorites ? "View All" : "View Favorites"
                        }
                    </button> 
                }
            </div>
            
        </div>
    )
}
