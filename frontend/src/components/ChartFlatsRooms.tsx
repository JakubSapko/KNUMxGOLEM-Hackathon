import { Column } from '@ant-design/plots';

const mockData = [
    {
        numberOfRooms: "3",
        numberOfFlats: 40
    },
    {
        numberOfRooms: "4",
        numberOfFlats: 28
    },
    {
        numberOfRooms: "5",
        numberOfFlats: 15
    }
]


const ChartFlatsRoom: React.FC = () => {

    const config = {
        data: mockData,
        xField: "numberOfRooms",
        yField: "numberOfFlats",
        xAxis: {
            label:{
                
            }
        }
        meta: {
            numberOfRooms:{
                alias: "Number of rooms"
            },
            numberOfFlats:{
                alias: "Number of flats"
            }
        }
    }

    return <Column {...config} className="inner" />
}

export default ChartFlatsRoom;