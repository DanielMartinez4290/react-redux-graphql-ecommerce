import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { map, mergeMap, tap } from 'rxjs/operators';
import { FETCH_CHARACTERS, fetchCharactersFulfilled } from './actions/guitarActions';

const ENDPOINT = 'http://star-wars-characters.glitch.me/api/search/';

const fetchCharactersEpic = action$ => {
    return action$.pipe(
        ofType(FETCH_CHARACTERS),
        tap(value => console.log("gonna fetch", value)),
        mergeMap(action => 
            ajax
              .getJSON(ENDPOINT + action.payload.searchTerm)
              .pipe(map(response => fetchCharactersFulfilled(response)))
        ),
    );
};

export default fetchCharactersEpic;