import Image from "next/image";
import styles from "./mediaCard.module.scss";
import Link from "next/link";

export const MediaCard = ({ media }) => {
	console.log(media);
	return (
		<div className={styles.card}>
			<Link href={`/movies/${media.id}`}>
				<div className={styles.image}>
					<Image
						src={`${process.env.TMDB_IMAGE_BASE_PATH}${media.poster_path}`}
						alt={media.title}
						fill
					/>
				</div>
			</Link>
			<div className={styles.content}>
				<p className={styles.vote}>{media.vote_average}</p>
				<h3>{media.title}</h3>
				<p>le {new Date(media.release_date).toLocaleDateString("fr-FR")}</p>
			</div>
		</div>
	);
};

export default MediaCard;
