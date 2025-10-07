import { Link } from "react-router";

function App() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"home"}>Home</Link>
        </li>
        <li>
          <Link to={"shop"}>Shop</Link>
        </li>
        <li>
          <Link to={"basket"}>Basket</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
