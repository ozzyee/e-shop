import styles from "../../styles/nav.module.css";

export default function Nav() {
	return (
		<div className={styles.nav}>
			<div className={styles.left}>E-Shop</div>
			<div className={styles.right}>
				<ul>
					<li>
						<a>Home</a>
					</li>
					<li>
						<a>Women</a>
					</li>
					<li>
						<a>Men</a>
					</li>
					<li>
						<a>Accessories</a>
					</li>
					<li>
						<a>Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
