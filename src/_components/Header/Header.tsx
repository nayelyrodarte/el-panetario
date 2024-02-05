import styles from './Header.module.css';
import Image from 'next/image';
import Croissant from './../../_assets/svg/croissant_beige.svg';

export default function Header() {
  return (
    <nav className={styles.header}>
      <section className={styles.header__intro}>
        <Image
          width={40}
          height={40}
          src={Croissant}
          alt="Icono de croissant"
        />
        <p>El Panetario</p>
      </section>
      <section>
        <ul className={styles.header__links}>
          <li>Inicio</li>
          <li>Recetas</li>
        </ul>
      </section>
    </nav>
  );
}
