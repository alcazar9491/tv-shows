import React from 'react';
import { List } from './List';
import { Filter } from './Filter';

export const TvShows = () => {


    return (
        <div className="main-container">
            <div className="tv-shows-container">
                <div className="tv-shows-title">
                    <h2>My TV Shows</h2>
                </div>
           
                <Filter />
                <List />
            </div>

        </div>
    )
}
