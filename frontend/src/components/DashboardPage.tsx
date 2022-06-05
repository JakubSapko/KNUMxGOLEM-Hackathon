import ChartFlatsRoom from "./ChartFlatsRooms";
import ChartTransactionsOverTime from "./ChartTransactionsOverTime";


export const DashboardPage: React.FC = () => {
    return (<div className="dashboard-container">
        <div className="top-left-item"><ChartFlatsRoom/></div>
        <div className="bottom-right-item"><ChartTransactionsOverTime/></div>
    </div>);
};
