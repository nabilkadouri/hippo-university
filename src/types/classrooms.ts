export interface Classroom {
    '@id': string;
    '@type': string;
    id: number;
    name: string;
    capacity: number;
    registerDeadline: string;
    nbStudents: number;
  }