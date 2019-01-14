export default (req, res, next) => {
  const errors = {};
  const rsvp = req.body;
  const { meetup, status } = rsvp;
  const responses = ['yes', 'no', 'maybe'];


  if (!meetup) {
    errors.meetup = 'A meetup id is required';
  }

  if (!status) {
    errors.status = 'Please input your rsvp status ';
  }

  if (typeof (status) !== 'string') {
    errors.status = 'status should be a string';
  }

  if (!responses.includes(status.toLowerCase())) {
    errors.status = 'Please insert a valid status.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).send({ status: 400, error: errors });
  }
  return next();
};
