import * as React from 'react';
import { Admin, Resource, List, Datagrid, TextField } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const dataProvider = simpleRestProvider('http://localhost:3000');


const OrderList = () => (
  <div style={{ padding: '1rem' }}>
    <h1>Sales Data</h1>
    <List resource="orders" perPage={25}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="date" />
        <TextField source="revenue" />
      </Datagrid>
    </List>

    <h2 style={{ margin: '2rem 0 1rem' }}>Revenue Trend</h2>
    <LineChart
      width={700}
      height={300}
      data={[
        { date: '2025-07-01', revenue: 1200 },
        { date: '2025-07-02', revenue: 950 },
        { date: '2025-07-03', revenue: 1430 },
      ]}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="revenue" />
    </LineChart>
  </div>
);

export default function App() {
  return (
    <Admin dataProvider={dataProvider} title="Seller Insights Dashboard">
      <Resource name="orders" list={OrderList} />
    </Admin>
  );
}
