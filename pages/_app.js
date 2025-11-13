import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <Link href="/">Главная</Link>
        <Link href="/about">О сайте</Link>
        <Link href="/services">Услуги</Link>
        <Link href="/portfolio">Портфолио</Link>
        <Link href="/contact">Контакты</Link>
      </nav>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
