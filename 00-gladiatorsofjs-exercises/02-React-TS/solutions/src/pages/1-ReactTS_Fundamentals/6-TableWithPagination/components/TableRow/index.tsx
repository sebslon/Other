import { Row } from "./TableRow.styles";

import { User } from "../../types";

export const TableRow = ({ user }: { user: User }) => {
  return (
    <Row>
      <span>{user.id}</span>
      <span>{`${user.first_name} ${user.last_name}`}</span>
    </Row>
  );
};
