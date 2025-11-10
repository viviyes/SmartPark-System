import {Card,Table,Row,Col,Input,Button,Pagination,Tag} from "antd" 
import { TableProps } from "antd";
import useDataList from "../../hooks/useDataList";
import { getEquipmentList } from "../../api/equipment";
interface SearchType{
    name:string;
    person:string;
}
interface DataType {
    id:number
    no: string,
    name: string;
    person: string;
    tel: number;
    time: string;
    rest: string;
    status: string;
    last: string;
    type: string;
    from: string
}
const columns:TableProps<DataType>["columns"]= [
    {
        title: "No.",
        key: "index",
        render: (text, record, index) => index + 1,
    },
    {
        title: 'Equipment Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Equipment Number',
        dataIndex: 'no',
        key: 'no',
    },
    {
        title: 'Responsible Person',
        dataIndex: 'person',
        key: 'person',
    },
    {
        title: 'Responsible Person Phone',
        dataIndex: 'tel',
        key: 'tel',
    },
    {
        title: 'Theoretical Life',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Remaining Life',
        dataIndex: 'rest',
        key: 'rest',
    },
    {
        title: 'Usage Status',
        dataIndex: 'status',
        key: 'status',
        render: (text) => {
            if (text === 1) {
                return <Tag color="green">In Use</Tag>
            } else if (text === 2) {
                return <Tag color="yellow">Maintenance</Tag>
            } else {
                return <Tag color="red">Damaged</Tag>
            }
        }
    },
    {
        title: 'Last Maintenance Date',
        dataIndex: 'last',
        key: 'last',
    },
    {
        title: 'Specification Model',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Production Factory',
        dataIndex: 'from',
        key: 'from',
    },
    {
        title: 'Operation',
        dataIndex: 'operate',
        key: 'operate',
        render: () => {
            return <Button type="primary" size="small">Detailed</Button>
        }
    },
]



function Equipment(){
 const {
    dataList,
    page,
    pageSize,
    total,
    loading,
    formData,
    setDataList,
    setPage,
    setPageSize,
    setTotal,
    setLoading,
    setFormData,
    loadData,
    onChange,
    handleChange,
    reset
} =useDataList<SearchType,DataType>({name:"",person:""},getEquipmentList)

    return <div>
        <Card className="search">
            <Row gutter={16}>
                <Col span={7}>
                    <p>Equipment Name：</p>
                    <Input value={formData.name} name="name" placeholder="Please enter the equipment name or number" onChange={handleChange}/>
                </Col>
                <Col span={7}>
                    <p>Responsible Person：</p>
                    <Input value={formData.person} name="person" placeholder="Please enter the responsible person name" onChange={handleChange}/>
                </Col>
                <Col span={3}>
                    <Button type="primary" className="mr" onClick={loadData}>Query</Button>
                    <Button onClick={reset}>Reset</Button>
                </Col>
            </Row>
        </Card> 
        <Card className="mt">
            <Table
                columns={columns}
                dataSource={dataList}
                loading={loading}
                rowKey={(record)=>record.id}
                pagination={false}
                locale={{ emptyText: "No Data" }}
            />
            <Pagination className="fr mt" showQuickJumper defaultCurrent={1} total={total} onChange={onChange} current={page} pageSize={pageSize}/>
        </Card>
    </div>
}

export default Equipment