import { commentsCounter } from '../comments.js';

const array = [{
  creation_date: '21-12-2021',
  username: 'Mike',
  comment: 'Hi there',
},
{
  creation_date: '21-12-2021',
  username: 'Mike',
  comment: 'Hi there',
},
{
  creation_date: '21-12-2021',
  username: 'Mike',
  comment: 'Hi there',
},
];
global.fetch = jest.fn(() => Promise.resolve({
  status: 200,
  json() {
    return array;
  },
}));
describe('Comments counter', () => {
  test('counts number of comments written for a movie by viewers', async () => {
    const result = await commentsCounter('itemId');
    expect(result).toBe(3);
  });
});
