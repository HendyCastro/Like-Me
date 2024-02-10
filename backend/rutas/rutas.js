const express = require('express');

const router = express.Router(); 

const {datos_recibidos, agregarPost, eliminarPost} = require('../rutas/funcione');
                

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

router.delete('/posts/:id', async (req, res) => {
  const postId = req.params.id;

  try {
    await eliminarPost(postId);
    res.json({ message: 'Post eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el post:', error);
    res.status(500).json({ message: 'Ocurrió un error al eliminar el post' });
  }
});

module.exports = router;
