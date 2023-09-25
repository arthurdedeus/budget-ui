import React from 'react';
import { Box } from "@chakra-ui/react";

interface SummaryProps {
  totalExpenses: string; // Define the type for your totalExpenses prop
}

const Summary: React.FC<SummaryProps> = ({ totalExpenses }) => {
  return (
    <Box bgColor="gray.100" p={4} fontSize="24px" textAlign="center" boxShadow="base">
      Total Expenses: {totalExpenses}
    </Box>
  );
};

export default Summary;
