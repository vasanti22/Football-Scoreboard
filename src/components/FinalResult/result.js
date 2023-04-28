import React from 'react';
const Result = ({ homeTeamScore, awayTeamScore }) => {
    return (
        <span className="result">{homeTeamScore} - {awayTeamScore}</span>
    );
};

export default Result;
