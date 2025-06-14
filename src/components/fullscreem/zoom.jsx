import { useState } from 'react';

export const Zoom = () => {
  const [zoom, setZoom] = useState(false);

  const iconoMaximizar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M1 1h6v2H3v4H1V1zm14 0v6h-2V3h-4V1h6zM1 15v-6h2v4h4v2H1zm14 0h-6v-2h4v-4h2v6z" />
    </svg>
  );
  const iconoMinimizar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M2 8h12v1H2z" />
    </svg>
  );

  const icono = zoom ? iconoMinimizar : iconoMaximizar;

  const alternarPantallaCompleta = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setZoom(true);
    } else {
      document.exitFullscreen();
      setZoom(false);
    }
  };

  return <button onClick={alternarPantallaCompleta}>{icono}</button>;
}
