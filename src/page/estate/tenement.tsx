import { Card,Row,Col,Table,Input, Button,Tag,Progress, Badge } from "antd"
import type { TableProps } from "antd"

interface DataType{
    key:string;
    name:string;
    person:string;
    tel:string;
    status:string;
    vacancyRate:number;
    propertyFee:string;
}

const columns:TableProps<DataType>['columns']=[
    {
        title:"No.",
        key:"index",
        render:(value,record,index)=>index+1
    },
    {
        title:"Building Name",
        dataIndex:"name",
        key:"name"
    },
    {
        title:"Person in Charge",
        dataIndex:"person",
        key:"person"
    },
    {
        title:"Person in Charge Phone",
        dataIndex:"tel",
        key:"tel"
    },
    {
        title:"Usage Status",
        dataIndex:"status",
        key:"status",
        render:(value)=>{
            if(value===1){
                return <Tag color="#f50">Under Construction</Tag>
            }else if(value===2){
                return <Tag color="#2db7f5">Completed</Tag>
            }else{
                return <Tag color="#87d068">In Use</Tag>
            }
        }
    },
    {
        title:"Vacancy Rate",
        dataIndex:"vacancyRate",
        key:"vacancyRate",
        render(value){
            return <Progress percent={value} status="active" />
        }
    },
    {
        title:"Property Fee Rate",
        dataIndex:"propertyFee",
        key:"propertyFee",
        render(value){
            return <Badge color="green" text={value}></Badge>
        }
    },
    {
        title:"Operation",
        key:"operate",
        render(value){
            return <>
                <Button type="primary" className="mr">Edit</Button>
                <Button type="primary" danger>Delete</Button>
            </>
        }
    },
]
const data: DataType[] = [
    {
        key: '1',
        name: 'A1 Building',
        person: "Emily",
        tel: '043892561',
        status: "Under Construction",
        vacancyRate: 60,
        propertyFee:"3.5%",
    },
    {
        key: '2',
        name: 'A2 Building',
        person: "Jackson",
        tel: '041982645',
        status: "Completed",
        vacancyRate: 40,
        propertyFee:"3.8%",
    },
    {
        key: '3',
        name: 'B1 Building',
        person: "Lily",
        tel: '049568219',
        status: "In Use",
        vacancyRate: 20,
        propertyFee:"3.1%",
    },
    {
        key: '4',
        name: 'B2 Building',
        person: "John",
        tel: '043891250',
        status: "In Use",
        vacancyRate: 30,
        propertyFee:"4.0%",
    },
    {
        key: '5',
        name: 'C1 Building',
        person: "James",
        tel: '043782698',
        status: "In Use",
        vacancyRate: 50,
        propertyFee:"3.5%",
    },
    {
        key: '6',
        name: 'C2 Building',
        person: "Henry",
        tel: '043172329',
        status: "In Use",
        vacancyRate: 10,
        propertyFee:"2.9%",
    },
    {
        key: '7',
        name: 'SkyLoom International Tower A',
        person: "Martin",
        tel: '043186942',
        status: "In Use",
        vacancyRate: 25,
        propertyFee:"3.7%",
    },
    {
        key: '8',
        name: 'Financial Plaza',
        person: "Nancy",
        tel: '043187293',
        status: "In Use",
        vacancyRate: 15,
        propertyFee:"3.3%",
    },
    
];
function Temement(){
    return <div>
        <Card className="search">
            <Row gutter={16}>
                <Col span={4}>
                    <p>Building Name：</p>
                    <Input></Input>
                </Col>
                <Col span={4}>
                    <p>Person in Charge：</p>
                    <Input></Input>
                </Col>
                <Col span={4}>
                    <Button className="mr" type="primary">Query</Button>
                    <Button>Reset</Button>
                </Col>
            </Row>
        </Card>
        <Card className="mt">
            <Table
                columns={columns}
                dataSource={data}
            />
        </Card>
    </div>
}

export default Temement