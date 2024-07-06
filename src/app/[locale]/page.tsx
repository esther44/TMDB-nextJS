import styles from "./page.module.scss";
import Popular from "@/components/popular/Popular";
import Genres from "@/components/genres/Genres";

interface HomeProps {
	params: {
		locale: string;
	};
}

export default function Home({ params: { locale } }: HomeProps) {
	return (
		<div className={styles.main}>
			<Popular locale={locale} />
			<Genres locale={locale} />
		</div>
	);
}
