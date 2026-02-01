import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  console.log(lat, lng);
  return (
    <div className={styles.mapContainer}>
      <div className={styles.map} onClick={() => navigate('form')}>
        <h1>Map</h1>
      </div>
    </div>
  );
}

export default Map;
