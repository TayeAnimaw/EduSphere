import { Course } from '../types';

export const fetchCourses = async (): Promise<Course[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, title: 'React Basics', instructor: 'Alice Johnson' },
    { id: 2, title: 'Advanced TypeScript', instructor: 'Bob Smith' },
    { id: 3, title: 'TailwindCSS Design', instructor: 'Charlie Lee' },
  ];
};