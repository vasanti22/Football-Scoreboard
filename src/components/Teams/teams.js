const Teams = ({teamData}) => {
    return (
        <div className="teams">
            <span>{teamData.name}</span>
            <img src={`https://flagcdn.com/${teamData.countryCode}.svg`} width="60" height="60" alt={`${teamData.name}`}/>  
        </div>
    );
};

export default Teams;
