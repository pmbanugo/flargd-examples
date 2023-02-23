import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Product Page</h1>
      <p>
        You&apos;re currently on <b>/product</b>
      </p>
      <p>
        <b>
          <Link to={"/"}>Go back</Link>
        </b>
      </p>
    </div>
  );
}
