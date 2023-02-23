import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Product Page - Bucket B</h1>
      <p>
        You&apos;re currently looking at the variant of the product page under{" "}
        <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
          pages/product/b.tsx
        </span>
      </p>
      <p>
        <b>
          <Link to={"/"}>Go back</Link>
        </b>
      </p>
    </div>
  );
}
