import { Person } from "../../helpers/types"

interface SinglePersonProps {
  person: Person;
}

export const SinglePerson = ({ person }: SinglePersonProps) => {
  return (
    <div>
      {person.name} {person.surname}
      <img src={person.photo} alt="avatar" className="avatar" />
    </div>
  )
}
