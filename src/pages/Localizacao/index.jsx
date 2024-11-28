import React, { useState } from "react";
import './styles.css';

const BodyFrame = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          console.error("Erro ao obter localização:", error.message);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocalização não é suportada pelo navegador.");
      setLoading(false);
    }
  };

  return (
    <div className="body-frame">
      {/* Cabeçalho */}
      <header className="header">
        <h1>SiDi</h1>
        <p>Bom dia, Tales Tompson!</p>
      </header>

      {/* Conteúdo */}
      <div className="content1">
        {/* Menu lateral */}
        <nav className="sidebar">
          <button>Meus Pontos</button>
          <button>Pagamento</button>
          <button className="active">Minha Localização</button>
          <button>Justificar Faltas</button>
        </nav>

        {/* Área do mapa */}
        <div className="map-container">
          <div className="map-header">
            <h2>Minha Localização</h2>
            <button onClick={getLocation} disabled={loading}>
              {loading ? "Carregando..." : "🔄"}
            </button>
          </div>
          {location.latitude && location.longitude ? (
            <iframe
              src={`https://www.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
              title="Mapa"
              className="map"
            ></iframe>
          ) : (
            <p className="map-placeholder">
              {loading
                ? "Obtendo localização..."
                : "Clique no botão acima para buscar sua localização."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyFrame;
