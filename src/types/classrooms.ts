export interface Classroom {
    '@id': string;
    '@type': string;
    id: number;
    image: string;
    name: string;
    description: string;
    capacity: number;
    registerDeadline: string;
    nbStudents: number;
  }

export interface ClassroomDetailsInterface {
  classroom: {
    id: number;
    name: string;
    image: string;
    description: string;
    capacity: number;
    nbStudents: number;
    registerDeadline: string;
  };
  formatDate: (dateString: string) => string;
}