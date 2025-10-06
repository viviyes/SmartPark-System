import { Card } from "antd"
import { Descriptions, Row, Col, Calendar, Avatar, List,Tag,Progress,Badge } from 'antd';
import type { DescriptionsProps } from 'antd';
const data = [
    {
        title: 'Ant Design Title 1',
    }
];


export default function Personal() {


    return <div>

        <Row gutter={16}>

            <Col span={6}>
                <Card>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://randomuser.me/api/portraits/thumb/men/52.jpg`} />}
                                    title={<a href="https://ant.design">James - Operation Specialist</a>}
                                    description="Work hard and make the best of yourself."
                                />
                            </List.Item>
                        )}
                    />
                </Card>
                <Card className="mt">
                    <Calendar fullscreen={false} />
                </Card>
            </Col>

            <Col span={18}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card>
                            Pending: <Badge count={4} showZero color="#faad14" />
                        </Card>
                        <Card title="New Account Application" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: New employees need to create a user permission account</p>
                            <p className="mt">Created by: Human Resources Department - Emily</p>
                            <div className="mt">
                                Date: <Tag>2024-05-02</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Account Problem</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={1} />
                            </div>
                        </Card>
                        <Card title="Property Fee Reminder" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: Remind enterprises to pay the property fee as soon as possible</p>
                            <p className="mt">Created by: President's Office - James</p>
                            <div className="mt">
                                Date: <Tag>2024-05-01</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="orange">Emergency</Tag>
                                <Tag color="blue">Property Problem</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={1} />
                            </div>
                        </Card>
                        <Card title="Charging Pile Repair" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: The charging pile on the 1st floor of C1 is damaged, please send someone to repair as soon as possible</p>
                            <p className="mt">Created by: Administration Department - James</p>
                            <div className="mt">
                                Date: <Tag>2024-05-04</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Property Problem</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={1} />
                            </div>
                        </Card>
                        
                    </Col>
                    <Col span={8}>
                        <Card>
                            Processing: <Badge count={2} showZero color="blue" />
                        </Card>
                        <Card title="Notify Enterprises to Test Heating" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: The heating will be tested soon, please adjust the valves</p>
                            <p className="mt">Created by: Administration Department - James</p>
                            <div className="mt">
                                Date: <Tag>2024-05-03</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Property Problem</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={34} />
                            </div>
                        </Card>
                        <Card title="Bill Not Approved" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: The new quarter's financial bill needs to be approved as soon as possible</p>
                            <p className="mt">Created by: President's Office - James</p>
                            <div className="mt">
                                Date: <Tag>2024-05-11</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="orange">Emergency</Tag>
                                <Tag color="blue">Financial Problem</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={65} />
                            </div>
                        </Card>
                        <Card title="Parking Lease Expiration Reminder" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: The parking lease is changed to annual rent</p>
                            <p className="mt">Created by: President's Office - James</p>
                            <div className="mt">
                                Date: <Tag>2024-05-20</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Account Problem</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={47} />
                            </div>
                        </Card>
                        
                    </Col>
                    <Col span={8}>
                        <Card>
                            Completed: <Badge count={9} showZero color="green" />
                        </Card>
                        <Card title="OperationArtical" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: Publish</p>
                            <p className="mt">Created by: Marketing Department - James</p>
                            <div className="mt">
                                Date: <Tag>2024-04-02</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Operation Problem</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={100} />
                            </div>
                        </Card>
                        <Card title="New Account Application" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: New employees need to create a user permission account</p>
                            <p className="mt">Created by: Human Resources Department - James</p>
                            <div className="mt">
                                Date: <Tag>2024-04-11</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Account Problem</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={100} />
                            </div>
                        </Card>
                            <Card title="Repair Processing" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: Building A1 elevator maintenance</p>
                            <p className="mt">Created by: Administration Department - James</p>
                            <div className="mt">
                                Date: <Tag>2024-04-17</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="orange">Regular</Tag>
                                <Tag color="blue">Property Problem</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={100} />
                            </div>
                        </Card>
                        
                    </Col>
                </Row>            
            </Col>

        </Row>


    </div>
}