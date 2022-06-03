import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <Link to="/" className="btn">
        Home
      </Link>
    </div>
  );
};
export default About;
