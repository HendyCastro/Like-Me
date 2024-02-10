const pool = require('../base_de_datos/inf');

const datos_recibidos = async ( titulo, img, descripcion )=>{
  const {rows} = await pool.query('select * from posts');
  return rows
}

const agregarPost = async ( titulo, img, descripcion )=>{
    const {rows} = await pool.query('insert into posts (titulo, img, descripcion) values ($1, $2, $3)', [titulo, img, descripcion]);
    return rows

}

const eliminarPost = async (postId) => {
  try {
    const query = 'DELETE FROM posts WHERE id = $1';
    const result = await pool.query(query, [postId]);
    if (result.rowCount === 0) {
      throw new Error(`No se encontró ningún post con el ID ${postId}`);
    }
  } catch (error) {
    throw new Error(`Error al eliminar el post con ID ${postId}: ${error.message}`);
  }
};

module.exports = {datos_recibidos, agregarPost, eliminarPost};
