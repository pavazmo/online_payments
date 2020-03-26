function OK201(data, res) {
  return res.status(201).json({
    ok: true,
    mensaje: 'New document has been created',
    data: data
  });
};

function error500(err, res) {
  return res.status(500).json({
    ok: false,
    mensaje: 'Error en bbdd, Internal Server Error.',
    errors: err
  });
};

function OK200(data, res) {
  return res.status(200).json({
    ok: true,
    mensaje: data,
  });
};

module.exports = {
    error500,
    OK201,
    OK200
}