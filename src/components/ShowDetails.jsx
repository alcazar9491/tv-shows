import { useContext } from 'react';
import { TvShowContext } from '../context/TvShowContext';
import { TvShowTypes } from '../context/TvShowTypes';

export const ShowDetails = ( { element, close } ) => {

    const { TvShowDispatch } = useContext( TvShowContext );

    return (
        <div className="modal-container">
            <div className="sub-modal-container">
                <div className="modall">
                    <div className=" flex justify-center wrap">
                        <div className="w-full flex justify-center" >
                             <h2 >
                                { element.name } 
                            </h2>
                            <a
                                className="imgClose"
                                onClick={() => close()}
                            >
                                <img
                                className="closeCross"
                                src="/cancel-dark.svg"
                                alt="close icon"
                                />
                            </a>
                        </div>
                        <div className="w-full flex justify-center ">
                            <button className="btn-favorites my-5" 
                                onClick={ () => TvShowDispatch({
                                    type:TvShowTypes.favChange,
                                    payload: element
                                }) }
                                >
                                    { 
                                        element.favorite ? "Remove to Favorites" : "Add to Favorites"
                                    }
                            </button> 
                        </div>

                            <div className="img-container">
                                {
                                    <img className="img" src={ element.image.original } alt={ element.name } />
                                }
                            </div>
                            <div className="w-full">
                                <p className="description">
                                    { element.summary.replace(/(<([^>]+)>)/ig, '') }
                                </p>
                            </div>
                            <div className="w-full flex justify-center">
                                <a href={ element.url } target="_blank"> View IMBD</a>
                            </div>
                </div>
                </div>
            </div>
        </div>
    )
}
