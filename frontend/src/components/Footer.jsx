import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#1a1a2e',
      color: '#aaa',
      textAlign: 'center',
      padding: '20px 24px',
      fontSize: '13px',
      marginTop: 'auto',
    }}>
      <p style={{ margin: '0 0 6px' }}>
        © {currentYear} <strong style={{ color: '#fff' }}>DECP</strong> — Department of Computer Engineering, University of Peradeniya
      </p>
      <p style={{ margin: 0 }}>
        <a href="http://www.ce.pdn.ac.lk/" target="_blank" rel="noreferrer" style={{ color: '#6c63ff', textDecoration: 'none', marginRight: '12px' }}>CE Dept.</a>
        <a href="https://github.com/cepdnaclk/E20-CO528-Department-Engagement-and-Career-Platform" target="_blank" rel="noreferrer" style={{ color: '#6c63ff', textDecoration: 'none' }}>GitHub</a>
      </p>
    </footer>
  );
}