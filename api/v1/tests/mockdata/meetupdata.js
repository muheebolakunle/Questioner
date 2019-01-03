const missing = {
  topic: '',
  location: '',
  happeningOn: '',
};

const invalid = {
  topic: 'abc#',
  location: 'abc%',
  happeningOn: 'wrongdate',
  images: ['http://sample.com/image1', 'http://sample.com/image2.jpg'],
  tags: ['tag1', 'tag2&'],
};

const correct = {
  topic: 'topic 001',
  location: 'location 001',
  happeningOn: '2019-12-12T23:02',
  images: ['http://sample.com/image1.jpg', 'http://sample.com/image2.jpg'],
  tags: ['tag1', 'tag2'],
};

const correct2 = {
  topic: 'topic 001',
  location: 'location 001',
  happeningOn: '2019-12-12T23:02',
  images: ['http://sample.com/image1.jpg', 'http://sample.com/image2.jpg'],
  tags: ['tag1', 'tag2'],
};

const correct3 = {
  topic: 'topic 001',
  location: 'location 001',
  happeningOn: '2019-12-08T23:02',
  images: ['http://sample.com/image1.jpg', 'http://sample.com/image2.jpg'],
  tags: ['tag1', 'tag2'],
};

export {
  missing, invalid, correct,
  correct2, correct3,
};
