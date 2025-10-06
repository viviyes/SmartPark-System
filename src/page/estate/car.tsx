import {Card,Row,Col,Table,Input,Button,Tabs,Image } from "antd"
import type { TabsProps,TableProps } from 'antd';
import come from "../../assets/come.jpg"
interface DataType {
    key: string;
    orderNo: string;
    date: string;
    carNo: string;
    type: string;
    startDate: string;
    time: string;
    count: string;
    cost: string;
}
interface DataType2 {
    key: string;
    carNo: string;
    name: string;
    tel: string;
    type: string;
    rest: string;
    time: string;
    pic: string;
}
const columns: TableProps<DataType>['columns'] = [
    {
        title: "No.",
        key: "index",
        render: (text, record, index) => index + 1,
    },
    {
        title: 'Order No.',
        dataIndex: 'orderNo',
        key: 'orderNo',

    },
    {
        title: 'Order Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'License Plate Number',
        dataIndex: 'carNo',
        key: 'carNo',
    },
    {
        title: 'Vehicle Type',
        dataIndex: 'type',
        key: 'type',

    },
    {
        title: 'Charge Start Time',
        dataIndex: 'startDate',
        key: 'startDate',
    },
    {
        title: 'Charge Duration',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Charge Quantity',
        dataIndex: 'count',
        key: 'count',
    },
    {
        title: 'Charge Cost',
        dataIndex: 'cost',
        key: 'cost',
    },
    {
        title: 'Operation',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record) => {
            return <>
                <Button type="primary" size="small">View</Button>
            </>
        }
    },

];

const data: DataType[] = [
    {
        key: '1',
        orderNo: 'CHG20241005001',
        date: "2024-10-05",
        carNo: 'BXK-73J',
        type: "Own Vehicle",
        startDate: "2024-10-05 08:15:23",
        time: "3 hours 45 minutes",
        count: "42.8kw",
        cost: "$58.20"
    },
    {
        key: '2',
        orderNo: 'CHG20241004087',
        date: "2024-10-04",
        carNo: 'CLM-45W',
        type: "Own Vehicle",
        startDate: "2024-10-04 18:22:41",
        time: "1 hour 35 minutes",
        count: "18.5kw",
        cost: "$25.10"
    },
    {
        key: '3',
        orderNo: 'CHG20241004056',
        date: "2024-10-04",
        carNo: 'ERT-18P',
        type: "Visitor",
        startDate: "2024-10-04 14:08:12",
        time: "2 hours 15 minutes",
        count: "28.3kw",
        cost: "$42.50"
    },
    {
        key: '4',
        orderNo: 'CHG20241003142',
        date: "2024-10-03",
        carNo: 'DFG-92K',
        type: "Own Vehicle",
        startDate: "2024-10-03 22:30:55",
        time: "4 hours 20 minutes",
        count: "51.2kw",
        cost: "$69.60"
    },
    {
        key: '5',
        orderNo: 'CHG20241003089',
        date: "2024-10-03",
        carNo: 'GHT-82C',
        type: "Own Vehicle",
        startDate: "2024-10-03 09:45:18",
        time: "2 hours 50 minutes",
        count: "33.7kw",
        cost: "$45.80"
    },
    {
        key: '6',
        orderNo: 'CHG20241002234',
        date: "2024-10-02",
        carNo: 'KLP-94T',
        type: "Own Vehicle",
        startDate: "2024-10-02 16:12:33",
        time: "5 hours 10 minutes",
        count: "62.4kw",
        cost: "$84.90"
    },
    {
        key: '7',
        orderNo: 'CHG20241002178',
        date: "2024-10-02",
        carNo: 'FVN-56M',
        type: "Visitor",
        startDate: "2024-10-02 11:25:47",
        time: "1 hour 25 minutes",
        count: "16.8kw",
        cost: "$25.20"
    },
    {
        key: '8',
        orderNo: 'CHG20241001095',
        date: "2024-10-01",
        carNo: 'HJK-27R',
        type: "Own Vehicle",
        startDate: "2024-10-01 20:05:29",
        time: "3 hours 15 minutes",
        count: "38.9kw",
        cost: "$52.80"
    },

];

const columns2: TableProps<DataType2>['columns'] = [
    {
        title: "No.",
        key: "index",
        render: (text, record, index) => index + 1,
    },
    {
        title: 'License Plate Number',
        dataIndex: 'carNo',
        key: 'carNo',

    },
    {
        title: 'Owner Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Owner Phone',
        dataIndex: 'tel',
        key: 'tel',
    },
    {
        title: 'Lease Type',
        dataIndex: 'type',
        key: 'type',

    },
    {
        title: 'Lease Remaining',
        dataIndex: 'rest',
        key: 'rest',
    },
    {
        title: 'Overdue Days',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Entry Photo',
        dataIndex: 'pic',
        key: 'pic',
        render: (text) => <Image
            src={come}
            width={50}
            placeholder={
                <Image
                    preview={false}
                    src={come}
                    width={150}
                />
            }
        />
    },

    {
        title: 'Operation',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record) => {
            return <>
                <Button type="primary" size="small" className='mr'>Edit</Button>
                <Button type="primary" size="small" danger>Delete</Button>
            </>
        }
    },

];
const data2: DataType2[] = [
    {
        key: '1',
        carNo: 'BXK-73J',
        name: "Oliver Mitchell",
        tel: "0412 567 891",
        type: 'Long Lease',
        rest: "245 days",
        time: "0 days",
        pic: "",
    },
    {
        key: '2',
        carNo: 'CLM-45W',
        name: "Emma Thompson",
        tel: "0423 789 456",
        type: 'Long Lease',
        rest: "189 days",
        time: "0 days",
        pic: "",
    },
    {
        key: '3',
        carNo: 'DFG-92K',
        name: "Liam Johnson",
        tel: "0434 123 678",
        type: 'Short Lease',
        rest: "42 days",
        time: "0 days",
        pic: "",
    },
    {
        key: '4',
        carNo: 'ERT-18P',
        name: "Sophia Williams",
        tel: "02 9876 5432",
        type: 'Long Lease',
        rest: "312 days",
        time: "0 days",
        pic: "",
    },
    {
        key: '5',
        carNo: 'FVN-56M',
        name: "Noah Anderson",
        tel: "0445 234 789",
        type: 'Visitor',
        rest: "7 days",
        time: "0 days",
        pic: "",
    },
    {
        key: '6',
        carNo: 'GHT-82C',
        name: "Isabella Brown",
        tel: "0456 891 234",
        type: 'Long Lease',
        rest: "156 days",
        time: "0 days",
        pic: "",
    },
    {
        key: '7',
        carNo: 'HJK-27R',
        name: "James Wilson",
        tel: "02 9234 7890",
        type: 'Short Lease',
        rest: "0 days",
        time: "5 days",
        pic: "",
    },
    {
        key: '8',
        carNo: 'KLP-94T',
        name: "Mia Davis",
        tel: "0478 345 123",
        type: 'Long Lease',
        rest: "278 days",
        time: "0 days",
        pic: "",
    },

];
const items:TabsProps['items']=[
    {
        key:"1",
        label:"Charge Record",
        children:<Table columns={columns} dataSource={data}/>
    },
    {
        key:"2",
        label:"List of Vehicles in the Park",
        children:<Table columns={columns2} dataSource={data2}/>
    }
]

function Car(){
    return <div>
        <Card>
            <Row gutter={16}>
                <Col span={8}>
                    <Input placeholder="Enter the license plate number, phone number or contact person"/>
                </Col>
                <Col span={8}>
                    <Button type="primary" className="ml">Query</Button>
                </Col>
            </Row>
        </Card>
        <Card className="mt">
            <Tabs items={items}></Tabs>
        </Card>
    </div>
}

export default Car