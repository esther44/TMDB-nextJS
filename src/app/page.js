import Popular from "@/components/popular/Popular";
import styles from "@/styles/page.module.scss";
import Genres from "@/components/Genres/Genres";

export default function Home() {
	return (
		<>
			<div className={styles.main}>
				<Popular></Popular>
				<Genres></Genres>
			</div>
		</>
	);
}
