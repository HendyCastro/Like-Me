const cors = require('cors');
const express = require('express');
const app = express();
const rutas = require('./rutas/rutas');

app.use(cors());
app.use(express.json());
app.use('/', rutas);




const PORT = process.env.PORT || 3001;




// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
