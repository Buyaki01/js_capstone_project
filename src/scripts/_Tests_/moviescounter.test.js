import { counter } from '../utils/counter.js';

jest.mock('../API/TV-maze.js');

describe('Movies counter', () => {
  test('countElements should return the size of an array', () => {
    // Arrange
    const array = [1, 2, 3, 4, 5, 6, 7];
    // Act
    const result = counter.countElements(array);
    // Assert
    expect(result).toBe(7);
  });
  test('moviesCounter should return the numbers of movies we recived from the mocked API', async () => {
    // Act
    const result = await counter.moviesCounter();
    // Assert
    expect(result).toBe(7);
  });
});