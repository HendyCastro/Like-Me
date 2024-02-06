const pool = require('../base_de_datos/inf');

const datos_recibidos = async ( titulo, img, descripcion )=>{
  const {rows} = await pool.query('select * from posts');
  return rows
}

const agregarPost = async ( titulo, img, descripcion )=>{
    const {rows} = await pool.query('insert into posts (titulo, img, descripcion) values ($1, $2, $3)', [titulo, img, descripcion]);
    return rows

}

module.exports = {datos_recibidos, agregarPost};
