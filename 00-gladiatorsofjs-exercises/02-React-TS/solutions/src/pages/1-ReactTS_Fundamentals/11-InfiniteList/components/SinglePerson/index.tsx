import { Person } from "../../helpers/types";

interface SinglePersonProps {
  person: Person;
}

export const SinglePerson = ({ person }: SinglePersonProps) => {
  return (
    <div className="list__person">
      <img src={person.photo} alt="avatar" className="list__person__avatar" />
      <div className="list__person__data">
        <span className="list__person__name">
          {person.name} {person.surname}
        </span>
        <span>Age: {person.age}</span>
        <span>Sex: {person.sex}</span>
      </div>
    </div>
  );
};
