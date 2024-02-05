'use client';

import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Croissant from './../../_assets/svg/croissant_beige.svg';

export default function Header() {
  const path = usePathname();
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
          <li
            style={{
              textDecoration: `${path === '/' ? 'underline' : 'none'}`,
            }}
          >
            <Link href="/">Inicio</Link>
          </li>
          <li
            style={{
              textDecoration: `${path === '/recipes' ? 'underline' : 'none'}`,
            }}
          >
            <Link href="/recipes">Recetas</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}
