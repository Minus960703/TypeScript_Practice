{
  // Intersection Types : & and의 느낌
  type Student = {
    name: string;
    score: number;
  }
  type Worker = {
    employeeId : number;
    work: () => void;
  }

  function interWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work())
  }

  interWork({
    name: 'YaYa',
    score: 3,
    employeeId: 3,
    work: () => {}
  })
}