import Popular from "@/components/popular/Popular";
import MediaCard from "@/components/media-card/mediaCard";
import styles from "./Home.module.scss";

export default function Home() {
	return (
		<>
			<div className={styles.main}>
				<Popular></Popular>
			</div>
		</>
	);
}
