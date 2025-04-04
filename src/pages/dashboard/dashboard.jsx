import './dashboard.css'
import AcctCard from '../../components/acctCard/acctCard'
import TransactionBoard from '../../components/transactionBoard/transactionBoard'
import TransactionBarChart from '../../components/transactionBarChart/transactionBarChart'
import useBankStore from '../../store/bankStore'

function Dashboard() {
    const {transactions} = useBankStore()
    const withdrawalchartData = transactions.filter(transaction => transaction.type == 'withdrawal')
    const depositChartData = transactions.filter(transaction => transaction.type == 'deposit')
    console.log(withdrawalchartData)
    return(
        <div className='dashboard'>
            <AcctCard/>
            <TransactionBoard />
            <div className="chart-section">
                <h1>Spendings</h1>
                <TransactionBarChart trans_data={withdrawalchartData}/>
            </div>
            <div className="chart-section">
                <h1>Earnings</h1>
                <TransactionBarChart trans_data={depositChartData}/>
            </div>
        </div>
    )
}

export default Dashboard