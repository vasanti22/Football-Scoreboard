import Teams from "../Teams/teams";
import Result from "../FinalResult/result";
import GameStatus from "../GameProgress/games";

const Scoreboard = ({ pairScore, status }) => {
    return (
        <section className="scoreboard">
            <Teams teamData={pairScore.homeTeam} />
            <main>
                <Result homeTeamScore={pairScore.homeTeam.score} awayTeamScore={pairScore.awayTeam.score} />
                <span className="teamtext">VS</span>
                <GameStatus status={status} />
            </main>
            <Teams teamData={pairScore.awayTeam} />
        </section>
    );
};

export default Scoreboard;