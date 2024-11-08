import React, { useEffect, useRef } from "react";

function Reserva() {
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <div className="reserva" ref={elementRef}>
      <h1 className="titulo-reserva">Reservá ahora tu espacio</h1>
      <div className="form">
        <form action="https://formsubmit.co/6d8e4e4b6b5b6b5b6b5b6b5b6b5b6b5" method="post">
          <input type="text" name="nombre" placeholder="Nombre" required />
          <input type="text" name="apellido" placeholder="Apellido" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="telefono" placeholder="Teléfono" required />
          <input type="date" name="fecha" placeholder="Fecha" required />
          <input type="time" name="hora" placeholder="Hora" required />
          <input type="text" name="cantidad" placeholder="Cantidad de personas" required />
          <input type="text" name="comentarios" placeholder="Comentarios" />
          <input type="submit" value="Reservar" />
        </form>
      </div>
    </div>
  );
}

export default Reserva;
