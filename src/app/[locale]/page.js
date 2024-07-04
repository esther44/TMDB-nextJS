import Popular from "@/components/popular/Popular";
import styles from "@/styles/page.module.scss";
import Genres from "@/components/Genres/Genres";

export const revalidate = 86400;

export default function Home({ params: { locale } }) {
	return (
		<>
			<div className={styles.main}>
				<Popular locale={locale}></Popular>
				<Genres locale={locale}></Genres>
			</div>
		</>
	);
}
