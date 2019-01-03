import { meetupStore } from '../datastorage';
import Meetups from '../models/Meetups';

export default {
  createMeetup: (req, res) => {
    const meetupLength = meetupStore.length;
    req.body.id = meetupLength > 0 ? meetupStore[meetupLength - 1].id + 1 : 1;
    const meetup = new Meetups(req.body);
    meetupStore.push(meetup);
    return res.status(201).send({
      status: 201,
      data: [meetup],
    });
  },
};
