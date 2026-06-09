// productos.js
const listadoProductos = [
  // --- VENTANAS RECTAS C/CELOSÍA (LÍNEA LIVIANA) ---
  ...["De abrir", "Corrediza"].flatMap(tipo => 
    ["Sin Reja", "Con Reja 10 mm"].flatMap(reja =>
      ["1000 x 1000", "1200 x 1000", "1500 x 1000"].map(medida => ({
        categoria: "Ventanas Rectas c/Celosía", linea: "Línea Liviana", sistema: tipo, detalle: reja, medida: medida, variante: "Estándar"
      }))
    )
  ),
  // --- VENTANAS RECTAS C/CELOSÍA (LÍNEA INTERMEDIA - DE ABRIR) ---
  ...["Sin Reja", "Con Reja 12 mm"].flatMap(reja =>
    ["600 x 1000", "1000 x 1000", "1200 x 1000", "1500 x 1000", "1800 x 1000", "600 x 1160", "1000 x 1160", "1200 x 1160", "1500 x 1160", "1800 x 1160", "600 x 1500", "1000 x 1500", "1200 x 1500", "1500 x 1500", "1800 x 1500", "600 x 2000", "1200 x 2000", "1500 x 2000", "1800 x 2000"].map(medida => ({
      categoria: "Ventanas Rectas c/Celosía", linea: "Línea Intermedia", sistema: "De abrir", detalle: reja, medida: medida, variante: "Estándar"
    }))
  ),
  // --- VENTANAS RECTAS C/CELOSÍA (LÍNEA INTERMEDIA - CORREDIZA) ---
  ...["Sin Reja", "Con Reja 12 mm"].flatMap(reja =>
    ["1000 x 1000", "1200 x 1000", "1500 x 1000", "1800 x 1000", "1000 x 1160", "1200 x 1160", "1500 x 1160", "1800 x 1160", "1000 x 1500", "1200 x 1500", "1500 x 1500", "1800 x 1500", "1200 x 2000", "1500 x 2000", "1800 x 2000"].map(medida => ({
      categoria: "Ventanas Rectas c/Celosía", linea: "Línea Intermedia", sistema: "Corrediza", detalle: reja, medida: medida, variante: "Estándar"
    }))
  ),
  // --- PUERTAS ---
  ...["Ciego", "1/4 Vidrio", "1/2 Vidrio", "Vidrio Lateral"].map(v => ({
    categoria: "Puertas", linea: "Línea Liviana", sistema: "Bastonada - Chapa Simple", detalle: "Reja caño 10x20 Marco", medida: "Estándar", variante: v
  })),
  ...["Ciego", "1/4 Vidrio", "1/2 Vidrio", "Vidrio Lateral", "3/4 Vidrio"].map(v => ({
    categoria: "Puertas", linea: "Línea Pesada", sistema: "Bastonada - Chapa simple", detalle: "Reja hierro 12mm - Marco 10cm - Bisagras", medida: "Estándar", variante: v
  })),
  ...["Ciego", "1/4 Vidrio", "1/2 Vidrio", "Vidrio Lateral", "3/4 Vidrio", "Vidrio Fijo"].map(v => ({
    categoria: "Puertas", linea: "Línea Pesada", sistema: "Bastonada Horizontal", detalle: "Modelo Nuevo", medida: "Estándar", variante: v
  })),
  // --- PORTADAS ---
  ...["1200 x 2050", "1600 x 2050"].flatMap(medida => [
    ...["Ciego", "1/4 Vidrio", "Vidrio Lateral", "1/2 Vidrio"].map(v => ({ categoria: "Portadas", linea: "Línea Liviana", sistema: "Bastonada - Chapa Simple", detalle: "Reja caño 10x20 Marco", medida: medida, variante: v })),
    ...["Ciego", "1/4 Vidrio", "Vidrio Lateral", "1/2 Vidrio", "3/4 Vidrio"].map(v => ({ categoria: "Portadas", linea: "Línea Pesada", sistema: "Bastonada - Chapa simple", detalle: "Reja hierro 12mm - Marco 10cm", medida: medida, variante: v })),
    ...["Ciego", "1/4 Vidrio", "Vidrio Lateral", "1/2 Vidrio", "3/4 Vidrio", "Vidrio Fijo"].map(v => ({ categoria: "Portadas", linea: "Línea Pesada", sistema: "Bastonada Horizontal", detalle: "Modelo Nuevo", medida: medida, variante: v }))
  ]),
  // --- PORTONES ---
  ...["Ciego", "1/4 Vidrio", "1/2 Vidrio", "Vidrio Lateral"].map(v => ({ categoria: "Portones", linea: "Línea Liviana", sistema: "Bastonada - Chapa Simple", detalle: "Reja caño 10x20 Marco", medida: "2400 x 2050", variante: v })),
  ...["Ciego", "1/4 Vidrio", "1/2 Vidrio", "Vidrio Lateral", "3/4 Vidrio"].map(v => ({ categoria: "Portones", linea: "Línea Pesada", sistema: "Bastonada - Chapa simple", detalle: "Reja hierro 12mm - Marco 10cm", medida: "2400 x 2050", variante: v })),
  ...["Ciego", "1/4 Vidrio", "1/2 Vidrio", "Vidrio Lateral", "3/4 Vidrio", "Vidrio Fijo"].map(v => ({ categoria: "Portones", linea: "Línea Pesada", sistema: "Bastonada Horizontal", detalle: "Modelo Nuevo", medida: "2400 x 2050", variante: v })),
  // --- LEVADIZOS ---
  ...["2700 x 2100", "3000 x 2100", "3500 x 2100", "4000 x 2100", "4500 x 2100", "5000 x 2100", "6000 x 2100"].flatMap(medida => [
    { categoria: "Levadizos", linea: "Estándar", sistema: "Kit levadizo para revestir en Madera o Aluminio", detalle: "Sin revestimiento", medida: medida, variante: "Kit" },
    { categoria: "Levadizos", linea: "Estándar", sistema: "Revestido en chapa bastonada horizontal o vertical", detalle: "Chapa Bastonada", medida: medida, variante: "Revestido" }
  ]),
  // --- LUCERAS ---
  ...["200 x 700", "200 x 1000", "200 x 1200", "200 x 1500", "200 x 1800"].map(m => ({ categoria: "Luceras", linea: "1 Hoja", sistema: "Fijo/Abrir", detalle: "Sin Reja", medida: m, variante: "Estándar" })),
  ...["200 x 700", "200 x 1000", "200 x 1200", "200 x 1500", "200 x 1800", "300 x 700", "300 x 1000", "300 x 1200", "300 x 1500", "300 x 1800", "400 x 700", "400 x 1000", "400 x 1200", "400 x 1500", "400 x 1800", "600 x 700", "600 x 1000", "600 x 1200", "600 x 1500", "600 x 1800"].map(m => ({ categoria: "Luceras", linea: "1 Hoja", sistema: "Fijo/Abrir", detalle: "Con Reja hierro 12mm", medida: m, variante: "Estándar" })),
  ...["300 x 700", "300 x 1000", "300 x 1200", "300 x 1500", "300 x 1800", "400 x 700", "400 x 1000", "400 x 1200", "400 x 1500", "400 x 1800", "600 x 700", "600 x 1000", "600 x 1200", "600 x 1500", "600 x 1800"].map(m => ({ categoria: "Luceras", linea: "1 Hoja", sistema: "Fijo/Abrir", detalle: "Con Reja colonial", medida: m, variante: "Estándar" })),
  ...["600 x 700", "600 x 1000", "600 x 1200", "600 x 1500", "600 x 1800"].flatMap(m => [
    { categoria: "Luceras", linea: "2 Hojas", sistema: "Fijo/Abrir", detalle: "Con Reja hierro 12mm", medida: m, variante: "Estándar" },
    { categoria: "Luceras", linea: "2 Hojas", sistema: "Fijo/Abrir", detalle: "Con Reja colonial", medida: m, variante: "Estándar" }
  ]),
  // --- VENTILUCES ---
  ...["400 x 200", "400 x 300", "400 x 200", "500 x 200", "500 x 300", "500 x 400", "600 x 200", "600 x 300", "600 x 400", "800 x 200", "800 x 300", "800 x 400", "1000 x 200", "1000 x 300", "1000 x 400", "1200 x 200", "1200 x 300", "1200 x 400", "1500 x 200", "1500 x 300", "1500 x 400"].map(m => ({ categoria: "Ventiluces", linea: "Estándar", sistema: "Sistemas a Palanca en 1 Hoja", detalle: "A Palanca", medida: m, variante: "1 Hoja" })),
  ...["600 x 400", "600 x 600", "600 x 800", "800 x 600", "800 x 800", "1000 x 600", "1000 x 800", "1200 x 600", "1200 x 800", "1500 x 600", "1500 x 800"].map(m => ({ categoria: "Ventiluces", linea: "Estándar", sistema: "Sistemas a Palanca en 2 Hoja", detalle: "A Palanca", medida: m, variante: "2 Hojas" })),
  ...["600 x 1000", "800 x 1000", "1000 x 1000"].map(m => ({ categoria: "Ventiluces", linea: "Estándar", sistema: "Sistemas a Palanca en 3 Hojas y 1 fija", detalle: "A Palanca + Fijo", medida: m, variante: "3 Hojas + 1 Fija" }))
];