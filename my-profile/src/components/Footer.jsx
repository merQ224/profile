import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© {new Date().getFullYear()} Winston Naidu</p>

        <div className="footer__links">
          <a href="https://github.com/merQ224" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/winston-naidu-2a13b517a" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="wnwinstonn95@gmail.com" target="_blank" rel="noreferrer">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer