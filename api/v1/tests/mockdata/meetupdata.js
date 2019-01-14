const missing = {
  topic: '',
  location: '',
  happeningOn: '',
};

const invalid = {
  topic: 67,
  location: 'abc%',
  happeningOn: 'wrongdate',
  tags: ['tag1', 'tag2&'],
};

const correct = {
  topic: 'topic 001',
  location: 'location 001',
  happeningOn: '10/23/2019',
  tags: ['tag1', 'tag2'],
};

const correct2 = {
  topic: 'topic 001',
  location: 'location 001',
  happeningOn: '11/23/2019',
  tags: ['tag1', 'tag2'],
};

const correct3 = {
  topic: 'topic 001',
  location: 'location 001',
  happeningOn: '08/23/2019',
  tags: ['tag1', 'tag2'],
};

const invalidrsvp = {
  meetup: '10',
  status: 'Yes',
};

const wrongrsvp = {
  meetup: '1',
  status: 'abc',
};

const rsvp = {
  meetup: '1',
  status: 'Yes',
};

const missingrsvp = {
  meetup: '',
  status: '',
};

export {
  missing, invalid, correct,
  correct2, correct3, invalidrsvp,
  wrongrsvp, rsvp, missingrsvp,
};
