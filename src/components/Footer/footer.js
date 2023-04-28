import packageJson from '../../../package.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="footer" data-cy="footer">
        <ul>
          <li className="footer-links">
            <a
                href="https://www.linkedin.com/in/vasanti-p-82484a64/"
                target="_blank"
                rel="noopener noreferrer"
                data-cy="Linkedin"
            >
              Linkedin
            </a>{" "}
            &#124;{" "}
            <a
                href="https://github.com/vasanti22"
                target="_blank"
                rel="noopener noreferrer"
                data-cy="githubLink"
            >
              Github
            </a>
          </li>
          <li className="copyrights">
            © {packageJson.author} {currentYear}. All rights reserved.
          </li>
        </ul>
      </footer>
  );
};
export default Footer;
