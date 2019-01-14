export default (req, res, next) => {
  const errors = {};
  const question = req.body;
  const {
    meetup, title, body, createdBy,
  } = question;

  if (!meetup) {
    errors.meetup = 'A meetup id is required';
  }

  if (!title) {
    errors.title = 'Please input the question title';
  }

  if (!body) {
    errors.body = 'Please input the question body';
  }

  if (!createdBy) {
    errors.createdBy = 'user id is required';
  }

  if (typeof (title) !== 'string') {
    errors.title = 'status';
  }

  if (typeof (body) !== 'string') {
    errors.body = 'Your question body should be a string';
  }

  if (body && !body.replace(/\s/g, '').length) {
    errors.body = 'Your question body should not contain only whitespaces';
  }

  if (title && !title.replace(/\s/g, '').length) {
    errors.title = 'Your question title should not contain only whitespaces';
  }

  if (!Number.isInteger(parseInt(meetup, 10))) {
    errors.meetup = 'Invalid Meetup id, it should be an integer';
  }
  if (!Number.isInteger(parseInt(createdBy,
    10))) {
    errors.createdBy = 'Invalid user id, it should be an integer';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).send({ status: 400, error: errors });
  }
  return next();
};
