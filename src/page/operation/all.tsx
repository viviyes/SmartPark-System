import { Row, Col, Card, Badge, Statistic } from "antd"
function All() {
    return <div>
        <Row gutter={16}>
            <Col span={18}>
                <Card>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Statistic title="Total Articles" value={1588} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="Intention Customers" value={235} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="In Residence Enterprises" value={766} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="Park Users" value={6988} />
                        </Col>
                    </Row>
                </Card>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card className="mt">
                            <Card title="To Do List" extra={<a href="#">more&gt;</a>} >
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="blue" text="Contract Signing Pending" />
                                    <span style={{ color: "#666" }}>2024-01-02</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="blue" text="Charging Pile Repair Report" />
                                    <span style={{ color: "#666" }}>2024-03-12</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="blue" text="Uniform Collection of Air Conditioning Usage Fees" />
                                    <span style={{ color: "#666" }}>2024-03-22</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Tenant Property Fee Collection" />
                                    <span style={{ color: "#666" }}>2024-04-01</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Potential Intentional Customer Follow-up" />
                                    <span style={{ color: "#666" }}>2024-04-07</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Park Cleaning Notes" />
                                    <span style={{ color: "#666" }}>2024-05-02</span>
                                </div>
                            </Card>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card className="mt">
                            <Card title="Latest News"
                                extra={<a href="#">more&gt;</a>}>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="red" text="Sydney CBD Commercial Property Market..." />
                                    <span style={{ color: "#666" }}>2024-10-02</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="red" text="NSW Government Announces New Energy..." />
                                    <span style={{ color: "#666" }}>2024-09-28</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="red" text="Ten Major Tech Startups Join Sydney..." />
                                    <span style={{ color: "#666" }}>2024-09-15</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Building Safety Regulations Updated..." />
                                    <span style={{ color: "#666" }}>2024-08-12</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Important Notice: EV Charging Station..." />
                                    <span style={{ color: "#666" }}>2024-07-20</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Sustainability Initiative Launched for..." />
                                    <span style={{ color: "#666" }}>2024-06-18</span>
                                </div>
                            </Card>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col span={6}>
                <Card title="Top Enterprises Ranking">
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>1. Atlassian Pty Ltd</p>
                        <p>Staff: 287</p>
                        <p>Val: $95M</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>2. Canva Australia</p>
                        <p>Staff: 156</p>
                        <p>Val: $78M</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>3. WiseTech Global</p>
                        <p>Staff: 198</p>
                        <p>Val: $68M</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>4. Afterpay Australia</p>
                        <p>Staff: 142</p>
                        <p>Val: $62M</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>5. SafetyCulture Pty</p>
                        <p>Staff: 134</p>
                        <p>Val: $58M</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>6. Campaign Monitor</p>
                        <p>Staff: 118</p>
                        <p>Val: $52M</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>7. Deputy Software</p>
                        <p>Staff: 105</p>
                        <p>Val: $48M</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>8. Employment Hero</p>
                        <p>Staff: 98</p>
                        <p>Val: $45M</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>9. Propeller Aero</p>
                        <p>Staff: 87</p>
                        <p>Val: $42M</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>10. Shippit Pty Ltd</p>
                        <p>Staff: 76</p>
                        <p>Val: $38M</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>11. Koala Furniture</p>
                        <p>Staff: 65</p>
                        <p>Val: $35M</p>
                    </div><div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>12. Who Gives A Crap</p>
                        <p>Staff: 54</p>
                        <p>Val: $32M</p>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
}

export default All