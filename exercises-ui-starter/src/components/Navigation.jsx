import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="mr-4 font-bold hover:underline">Home</Link>
      <Link to="/add-exercise" className="mr-4 hover:underline">Add Exercise</Link>
    </nav>
  );
}
