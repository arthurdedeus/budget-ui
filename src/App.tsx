import React from 'react'
import './App.css'
import { Box } from '@chakra-ui/layout'
import Header from './components/Header'
import Summary from './components/Summary'
import TableComponent from './components/TableComponent'

const tableData = [
  {
    date: "2023-09-15",
    name: "Expense 1",
    description: "Restaurant",
    category: "Food",
    amount: "$50.00",
    installments: "1",
  },
  {
    date: "2023-09-20",
    name: "Expense 2",
    description: "Groceries",
    category: "Shopping",
    amount: "$120.00",
    installments: "1",
  },
  {
    date: "2023-09-25",
    name: "Expense 3",
    description: "Gasoline",
    category: "Transportation",
    amount: "$40.00",
    installments: "1",
  },
];

// Usage:
<TableComponent data={tableData} />


function App() {
  return (

      <Box>
        <Header />
        <Summary totalExpenses='1000'/>
        <TableComponent data={tableData} />
        {/* Add pagination component if needed */}
      </Box>
  )
}

export default App
