import { useReducer, useState } from "react";
import Scoreboard from "../Scoreboard/scoreboard";
import useInterval from "../../hooks/useInterval";
import Messages from "../Messages";
import ScoresReducer, { actionTypes, initialState } from "./scoresreducer";
import useRandomInterval from "../../hooks/useRandomInterval";
import { areAllGamesFinished, getRandomInt } from "../../utils";
import useTimeout from "../../hooks/useTimeout";


const TIME_BEFORE_GAMES_START = 3; 
const PLAYING_TIME = 90000; 
const ScoresGrid = () => {
    const [timeElapsed, setTimeElapsed] = useState(TIME_BEFORE_GAMES_START);
    const [state, dispatch] = useReducer(ScoresReducer, initialState);
    const [isPlayingTime, setIsPlayingTime] = useState(true);

    const minGameId = 0;
    const { games, finishedGames } = state;
    const gamesToRender = games.length > 0 ? games : finishedGames;
    const maxGameId = games.length - 1;

    
    useInterval(() => {
        setTimeElapsed((timeElapsed) => timeElapsed - 1);

        if (timeElapsed === 0) {
            setTimeElapsed(timeElapsed); 
        }
    }, 1000);

    const delay = [3000, 4000];
    const cancelUpdateGameState = useRandomInterval(() => {
        if (isPlayingTime) {
            dispatch({ type: actionTypes.START_GAME, data: { gameId: getRandomInt(minGameId, maxGameId) } });
        } else {
            dispatch({ type: actionTypes.FINISH_GAME, data: { gameId: getRandomInt(minGameId, initialState.games.length - 1) } });
        }
    }, ...delay);

    // Start game score updates
    const updateScoreDelay = [3000, 8000];
    const cancelUpdateScoreInterval = useRandomInterval(() => {
        dispatch({
            type: actionTypes.UPDATE_SCORE,
            data: { gameId: getRandomInt(minGameId, maxGameId), teamId: getRandomInt(1, 2) }
        });
    }, ...updateScoreDelay);

   if (areAllGamesFinished(games)) {
       console.log(">>> All games finished. Cancel all updates.");
       cancelUpdateGameState();
       cancelUpdateScoreInterval();
    }

    // timeout to finish the games
    useTimeout(() => {
        console.log(">>> Playing time ended. Start finalizing the games.");
        setIsPlayingTime(false);
    }, PLAYING_TIME);

    const getGameStatus = (isGameStarted) => isGameStarted ? 'Live' : '';

    const getScoreBoardStateMessage = () => areAllGamesFinished(games) ? 'Summary'  : 'Live Matches';

    return (
        <>
            {timeElapsed === 0 ?
                <>
                    <Messages message={getScoreBoardStateMessage()}/> 
                    <div className="grid">
                        {gamesToRender?.map(pairScore => (
                            <Scoreboard
                                key={crypto.randomUUID()}
                                pairScore={pairScore}
                                status={getGameStatus(pairScore.startedGame)}/>))}
                    </div>
                </> :
                <Messages message={`Games are about to start in ${timeElapsed} seconds.`}/> 
            }
        </>
        ); 
};

export default ScoresGrid;
