import { useState } from 'react';

const GroupedTeams = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

  function groupTeamMembers() {
    let teams = [];

    const teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
    const teamA = {
      team: 'TeamA',
      members: teamAMembers,
      collapsed: (selectedTeam === 'TeamA') ? false : true
    }
    teams.push(teamA);

    const teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
    const teamB = {
      team: 'TeamB',
      members: teamBMembers,
      collapsed: (selectedTeam === 'TeamB') ? false : true
    }
    teams.push(teamB);

    const teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
    const teamC = {
      team: 'TeamC',
      members: teamCMembers,
      collapsed: (selectedTeam === 'TeamC') ? false : true
    }
    teams.push(teamC);

    const teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
    const teamD = {
      team: 'TeamD',
      members: teamDMembers,
      collapsed: (selectedTeam === 'TeamD') ? false : true
    }
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(e) {
    const transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === e.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData);

    setGroupedEmployees(transformedGroupData);
    setTeam(e.currentTarget.id);
  }

  return (
    <main className='container'>
      {
        groupedEmployees.map((item) => {
          return (
            <div key={item.team} className="card mt-2" style={{ cursor: 'pointer' }}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                Team: {item.team}
              </h4>
              <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
                <hr />
                {
                  item.members.map((member) => {
                    return (
                      <div className='mt-2'>
                        <h5 className='card-title mt-2'>
                          <span className='text-dark'>Full name: {member.fullName}</span>
                        </h5>
                        <p>Designation: {member.designation}</p>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  );
}

export default GroupedTeams;