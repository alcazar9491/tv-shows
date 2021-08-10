import { TvShowTypes } from "./TvShowTypes";
import { InitTvShowContext } from "./TvShowContext";

export const TvShowReducer = ( state = InitTvShowContext, action ) => {
  switch (action.type) {

    case TvShowTypes.changeStatus:
      return { ...state, TvShowList: action.payload };

      case TvShowTypes.loadData:
        return { ...state, TvShowList: action.payload };

        case TvShowTypes.toogleFavs:
          return { ...state, favorites: !state.favorites };

          case TvShowTypes.inputChange:
            return { ...state, filter: action.payload };
            

          case TvShowTypes.favChange:

            const tempArr = state.TvShowList.filter( e => e.id !== action.payload.id );

            tempArr.unshift( { ...action.payload, favorite: !action.payload.favorite } );

            return { ...state, TvShowList:tempArr };
          


    default:
      return state;
  }
};

