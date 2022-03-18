const patientsRoutes = require('./patients');


const constructorMethod = (app) => {
  app.use('/patients', verifyUserLogIn, patientsRoutes);

  app.get('/', verifyUserLogIn, (req, res) => {
    res.status(200).send({mesage: "sever is running"});
  });

  app.use('*', (req, res) => {
    res.status(404).send({error: "Page not available!"});
  });
};


const verifyUserLogIn = (req, res, next) => {
  try {
    next()
  } catch (e) {
    console.log(e);
  }

}

module.exports = constructorMethod;