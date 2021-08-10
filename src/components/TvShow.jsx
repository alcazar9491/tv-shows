import { useContext } from 'react';
import { TvShowContext } from '../context/TvShowContext';
import { TvShowTypes } from '../context/TvShowTypes';
import { ShowDetails } from './ShowDetails';
import usePortal from "react-useportal";


export const TvShow = ( { element } ) => {


    const { TvShowDispatch } = useContext( TvShowContext );


    const { openPortal, closePortal, isOpen, Portal } = usePortal();

   
    return (
        <div className="tv-show">
            <div className="img-container">
                <img className="img" src={ element.image.original } alt={ element.name } />
            </div>
            <div className="tv-show-title">
                <a 
                                      onClick={(e) => {
                                        isOpen ? closePortal(e) : openPortal(e);
                                      }}
                >
                {
                    element.name
                }
                </a>

            </div>
            <div className="add-fav">
                <input value={ element.favorite } type="checkbox" checked={ element.favorite } name="favorite" 
                    onChange={ () => TvShowDispatch({
                        type:TvShowTypes.favChange,
                        payload: element
                    }) }
                />
            </div>


            {isOpen && (
                <Portal>
                    <ShowDetails element={ element } close={ closePortal } />
                </Portal>
            )}
            
        </div>
    )
}
