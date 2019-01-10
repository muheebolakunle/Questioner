import moment from 'moment';

export default (req, res, next) => {
  const errors = {};
  const meetup = req.body;
  const { tags } = meetup;

  if (!meetup.topic) {
    errors.topic = 'A topic is required';
  }

  if (typeof (meetup.topic) !== 'string') {
    errors.validTopic = 'Your topic should be a string';
  }

  if (!meetup.location) {
    errors.location = 'A location is required';
  }

  if (typeof (meetup.location) !== 'string') {
    errors.validLocation = 'Your location should be a string';
  }

  if (!meetup.happeningOn) {
    errors.happeningOn = 'A date for the meetup is required';
  }

  if (moment(meetup.happeningOn, 'MM/DD/YYYY', true).isValid() === false) {
    errors.date = 'Please insert a valid date in the format MM/DD/YYYY';
  }


  if (tags) {
    tags.forEach((tag) => {
      if (typeof (tag) !== 'string') {
        errors.tags = `${tag} should be a string`;
      }
    });
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).send({ status: 400, error: errors });
  }
  return next();
};
