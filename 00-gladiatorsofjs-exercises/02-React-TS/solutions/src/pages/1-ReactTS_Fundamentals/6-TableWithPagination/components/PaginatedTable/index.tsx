import { Table, TableHeader } from "./PaginatedTable.styles";

import { User } from "../../types";
import { TableRow } from "../TableRow";

interface DataEntries {
  data: User[];
}

export const PaginatedTable = ({ data }: DataEntries) => {
  return (
    <Table>
      <TableHeader>
        <span>No.</span>
        <span>Name</span>
      </TableHeader>
      {data.map((user) => (
        <TableRow user={user} />
      ))}
    </Table>
  );
};
