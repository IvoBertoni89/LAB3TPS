import React from 'react';

const Table = ({ netIncomes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Compania</th>
          <th>Ingreso Neto</th>
        </tr>
      </thead>
      <tbody>
        {netIncomes.map((item, index) => (
          <tr key={index}>
            <td>{item.brand}</td>
            <td>{item.income}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

//ignoren esto, lo deje para que quede el codigo escrito por si lo tengo que borrar del app en un futuro :)

//import Table from './components/table/Table';

//const App = () => {
//  const netIncomes = [
//    { brand: 'McDonalds', income: 1291283 },
//    { brand: 'Burger King', income: 1927361 },
//    { brand: 'KFC', income: 1098463 }
//  ];

//  const totalIncome = netIncomes.reduce((acc, item) => acc + item.income, 0);
//  const averageIncome = totalIncome / netIncomes.length;

//  return (
//    <div>
//      <Table netIncomes={netIncomes} />
//      <p>Promedio de ingreso neto: {averageIncome.toFixed(2)}</p>
//    </div>
//  );
//};
