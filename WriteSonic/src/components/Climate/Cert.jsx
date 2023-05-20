import { useRef, useEffect } from 'react';

export default function Certificate({treeName}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Load image onto canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      const canvasWidth = canvas.offsetWidth;
      const canvasHeight = canvas.offsetHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // Calculate image dimensions to cover only 50% of the screen
      const imgRatio = img.width / img.height;
      const canvasRatio = canvasWidth / canvasHeight;
      let imgWidth = canvasWidth * 0.5;
      let imgHeight = imgWidth / imgRatio;
      if (imgRatio > canvasRatio) {
        imgHeight = canvasHeight * 0.5;
        imgWidth = imgHeight * imgRatio;
      }

      // Draw image onto canvas
      const imgX = (canvasWidth - imgWidth) / 2;
      const imgY = (canvasHeight - imgHeight) / 2;
      ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);

      // Draw text onto canvas
      ctx.fillStyle = 'black';
      ctx.font = ' 15px Arial';
      ctx.fillText(treeName, imgX + imgWidth / 2 - 70, imgY + imgHeight - 160);
    };
    img.src = 'certificate.png';
  }, []);

  const handleDownloadCertificate = () => {
    // Allow user to download modified image
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'certificate.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div>
      <canvas ref={canvasRef} style={{ display: 'block', width: '80%', height: '50%' }}></canvas>
      <button onClick={handleDownloadCertificate}>Download Certificate</button>
    </div>
  );
}
