import { Card,Table,Button,Row,Col,Input,Tag } from "antd"
import type { TableProps } from 'antd';
interface DataType {
    key: string;
    orderNo: string;
    name: string;
    tel: string;
    address: string;
    description: string;
    status: string;
    time: string;
}
const columns: TableProps<DataType>['columns'] = [
    {
        title: "No.",
        key: "index",
        render: (text, record, index) => index + 1,
    },
    {
        title: 'Repair Order No.',
        dataIndex: 'orderNo',
        key: 'orderNo',

    },
    {
        title: 'Repair Person',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Repair Person Phone',
        dataIndex: 'tel',
        key: 'tel',
    },
    {
        title: 'Repair Address',
        dataIndex: 'address',
        key: 'address',

    },
    {
        title: 'Fault Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Repair Status',
        dataIndex: 'status',
        key: 'status',
        render:(text,record)=>{
            if(text===1){
                return  <Tag color="#f50">Pending Repair</Tag>
            }else if(text===2){
                return  <Tag color="#2db7f5">Repairing</Tag>
            }else{
                return  <Tag color="green">Completed</Tag>
            }
        }
    },
    {
        title: 'Repair Time',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Operation',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record) => {
            if(record.status==="1"){
                return <>
                <Button type="primary" size="small">Assign</Button>
            </>
            }else if(record.status=="2"){
                return <>
                <button >Repairing...</button>
            </>
            }else{
                return  <Button type="primary" size="small">Completed</Button>
            }

           
        }
    },

];

const data: DataType[] = [
    {
        key: '1',
        orderNo: 'RPR20241005023',
        name: "Sarah Mitchell",
        tel: '0412 789 345',
        address: "Level 5, Suite 502, Building A",
        description: "Air conditioning cooling issue, intermittent cooling with poor performance",
        status: "1",
        time: "2024-10-05 09:15",
    },
    {
        key: '2',
        orderNo: 'RPR20241004156',
        name: "Michael Chen",
        tel: '02 9876 4321',
        address: "Level 12, Suite 1203, Building B",
        description: "Water leakage from ceiling in bathroom, requires urgent attention",
        status: "2",
        time: "2024-10-04 14:22",
    },
    {
        key: '3',
        orderNo: 'RPR20241003089',
        name: "Emily Thompson",
        tel: '0423 456 789',
        address: "Level 3, Suite 305, Building A",
        description: "Elevator making unusual noise and stopping between floors",
        status: "3",
        time: "2024-10-03 16:48",
    },
    {
        key: '4',
        orderNo: 'RPR20241003045',
        name: "James Wilson",
        tel: '0434 567 890',
        address: "Level 8, Suite 801, Building C",
        description: "Office door lock malfunction, cannot lock properly",
        status: "1",
        time: "2024-10-03 11:30",
    },
    {
        key: '5',
        orderNo: 'RPR20241002178',
        name: "Olivia Brown",
        tel: '0445 678 901',
        address: "Level 6, Suite 607, Building B",
        description: "Window glass cracked, possible thermal stress fracture",
        status: "3",
        time: "2024-10-02 08:56",
    },
    {
        key: '6',
        orderNo: 'RPR20241001234',
        name: "Daniel Lee",
        tel: '02 9234 5678',
        address: "Level 10, Suite 1004, Building A",
        description: "Power outlet not working, need electrical inspection",
        status: "2",
        time: "2024-10-01 15:42",
    },

];
function Repair(){
    return <div>
        <Card>
            <Row>
                <Col span={8}>
                    <Input placeholder="Enter the repair order number" />
                </Col>
                <Col span={8}>
                    <Button type='primary' className='ml'>Query</Button>
                </Col>
            </Row>

        </Card>
        <Card className="mt">
            <Table dataSource={data} columns={columns}/>
        </Card>
    </div>
}

export default Repair