import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

interface TableComponentProps {
  // Define the type for your data prop
  data: {
    date: string;
    name: string;
    description: string;
    category: string;
    amount: string;
    installments: string;
  }[];
}

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
  return (
    <Box boxShadow="base">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Category</Th>
            <Th>Amount</Th>
            <Th>Installments</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>{item.date}</Td>
              <Td>{item.name}</Td>
              <Td>{item.description}</Td>
              <Td>{item.category}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.installments}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableComponent;
