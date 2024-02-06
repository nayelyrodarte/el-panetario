import Image from 'next/image';

import Wave from '@/_assets/svg/wave.svg';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h1>El Panetario</h1>
        <h2>Un Universo de Pan</h2>
      </section>
      <Image className={styles.wave} src={Wave} alt="" />
    </main>
  );
}
