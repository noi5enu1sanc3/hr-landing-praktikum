export const filterByPost = data =>
  data.some(item => item === 'mentor' || item === 'reviewer');

export const filterByDirection = data =>
  data.some(
    item =>
      item === 'management' ||
      item === 'marketing' ||
      item === 'design' ||
      item === 'programming'
  );

export const filterBySalary = data =>
  data.some(item => typeof item === 'number');
