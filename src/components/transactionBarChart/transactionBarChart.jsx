import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import './transactionBarChart.css'


function TransactionBarChart({trans_data}) {
  let user = JSON.parse(localStorage.getItem("user"))
  return (
    <>
      {
        user && (
          <>
            <ResponsiveContainer width="100%" height={300} className={'chart'}>
              <BarChart data={trans_data}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </>
        )
      }
      
    </>
    
  )
}

export default TransactionBarChart