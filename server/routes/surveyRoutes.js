const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const Survey = mongoose.model('surveys')
const Mailer = require('../services/mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

module.exports = (app) => {
  app.get('/api/surveys/thanks',(req,res) => {
    res.send('Thanks for voting!!!!')
  })

  app.post('/api/surveys',requireLogin,requireCredits, async (req, res) => {
      const { title, subject, body, recipients} = req.body;

      const hello = new Survey({
          title,
          subject,
          body,
          recipients: recipients.split(',').map(email => ({ email: email.trim() })), //cut out any extra trailing spaces
          _user:req.user.id,
          dateSent:Date.now()
      })
      //sending out the email here
     const mailer = new Mailer(hello, surveyTemplate(hello));
     try {
      await mailer.send();
      await survey.save();
      req.user.credits -=1
      const user = await req.user.save();

      res.send(user);
    } catch (err){
      res.status(422).send(err);
    }
  });
};