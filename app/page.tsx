import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href={{ pathname: "[id]", query: { id: "Hello World" } }}>
        Hyperlink
      </Link>
    </div>
  );
}
