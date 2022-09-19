const Footer = () => {
  const today = new Date();
  return (
    <footer className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8" style={{ textAlign: 'center' }}>
          <h5>Teams Manager - {today.getFullYear()}</h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;