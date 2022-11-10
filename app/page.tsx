import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href={{ pathname: "/blog/[slug]", query: { slug: "my-post" } }}>
        Hyperlink
      </Link>
    </div>
  );
}
