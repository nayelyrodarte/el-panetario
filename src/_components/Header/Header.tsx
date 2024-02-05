import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Croissant from './../../_assets/svg/croissant_beige.svg';

export default function Header() {
  return (
    <nav className={styles.header}>
      <section>
        <Image
          width={40}
          height={40}
          src={Croissant}
          alt="Icono de croissant"
        />
        <p>El Panetario</p>
      </section>
      <section>
        <ul>
          <li>Inicio</li>
          <li>Recetas</li>
        </ul>
      </section>
    </nav>
  );
}
