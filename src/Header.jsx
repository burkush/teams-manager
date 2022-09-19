const Header = ({ selectedTeam, teamMembersCount }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8" style={{ textAlign: 'center' }}>
          <h1>Teams Manager</h1>
          <h3>
            {selectedTeam} has {teamMembersCount}{' '}
            {teamMembersCount === 1 ? 'member' : 'members'}
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
