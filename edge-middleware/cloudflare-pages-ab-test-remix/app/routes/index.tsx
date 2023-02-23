import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/product"}>Product</Link>
        </li>
      </ul>
    </div>
  );
}
