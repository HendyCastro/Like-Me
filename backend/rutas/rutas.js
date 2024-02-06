const express = require('express');

const router = express.Router(); 

const {datos_recibidos, agregarPost} = require('../rutas/funcione');
                

router.get('/posts', async (req, res) => {
  try {
    const result_datos = await datos_recibidos();
    res.json(result_datos);
  } catch (err) {
      
    console.log('ocurrio un error');
  }
  
});

router.post('/posts', async (req, res) => {
  const { titulo, img, descripcion } = req.body;
  const result = await agregarPost(titulo, img, descripcion);
  res.json(result);

})
module.exports = router;
