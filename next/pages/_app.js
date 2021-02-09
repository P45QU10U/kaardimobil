import '../styles/globals.css';
import Skeleton from '../components/skeleton';

function MyApp({ Component, pageProps }) {
  return (
    <Skeleton>
      <Component {...pageProps} />
    </Skeleton>
  );
}

export default MyApp;
