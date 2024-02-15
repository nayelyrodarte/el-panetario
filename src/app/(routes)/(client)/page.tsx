import Image from 'next/image';

import Wave from '@/_assets/svg/wave.svg';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h1>El Panetario</h1>
        <h3>Un Universo de Pan</h3>
      </section>
      <Image className={styles.wave} src={Wave} alt="" />
    </main>
  );
}
