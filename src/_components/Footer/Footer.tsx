import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <div>
          <h2>El Panetario</h2>
          <p>© 2024. Todos los derechos reservados.</p>
        </div>
      </section>
    </footer>
  );
}
