import './Footer.css';
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_left">
          <p>Home</p>
          <p>Company</p>
          <p>Portfolio</p>
          <p>Blog</p>
        </div>
        <div className="footer_right">
          &#xa9; 2024 <span style={{ color: '#9242db' }}>Yatin Uppal,</span> made with love for a better web
        </div>
      </div>
    </>
  );
};

export default Footer;
