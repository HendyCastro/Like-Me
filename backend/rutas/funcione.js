const pool = require('../base_de_datos/inf');

const datos_recibidos = async () => {
  try {
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw new Error("Ocurrió un error al obtener los datos de la base de datos");
  }
};

const agregarPost = async (titulo, img, descripcion) => {
  try {
    const { rows } = await pool.query('INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *', [titulo, img, descripcion]);
    return rows;
  } catch (error) {
    console.error('Error al agregar el post:', error);
    throw new Error('Ocurrió un error al agregar el post en la base de datos');
  }
};

const actualizarPost = async (postId, likes) => {
  try {
    const { rows } = await pool.query('UPDATE posts SET likes = likes + $1 WHERE id = $2 RETURNING *', [likes, postId]);
    return rows;
  } catch (error) {
    console.error(`Error al actualizar los likes del post con ID ${postId}: ${error.message}`);
    throw new Error(`Error al actualizar los likes del post con ID ${postId}: ${error.message}`);
  }
};

const eliminarPost = async (postId) => {
  try {
    const query = 'DELETE FROM posts WHERE id = $1';
    const result = await pool.query(query, [postId]);
    if (result.rowCount === 0) {
      throw new Error(`No se encontró ningún post con el ID ${postId}`);
    }
  } catch (error) {
    console.error(`Error al eliminar el post con ID ${postId}: ${error.message}`);
    throw new Error(`Error al eliminar el post con ID ${postId}: ${error.message}`);
  }
};

module.exports = {datos_recibidos, agregarPost, eliminarPost, actualizarPost};
