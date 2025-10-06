import { Card, Row, Col, Image,Radio,Spin } from "antd"
import { useEffect, useState } from "react"
import { getRoomList } from "../../api/room"
import "./index.scss"
import { RadioChangeEvent } from "antd/lib";
import roomPic from "../../assets/roomPic.jpg"
interface RoomType {
    roomNumber: number;
    decorationType: "Rough" | "Finish";
    area: number;
    unitPrice: number;
    src:string
}
function Room() {
    const [visible, setVisible] = useState<boolean>(false)
    const [room, setRoom] = useState<RoomType[]>([])
    const [src,setSrc]=useState<string>(roomPic);
    const [loading,setLoading]=useState<boolean>(false)
    const loadRoom = async (roomid: string) => {
        setLoading(true)
        const { data: { rooms } } = await getRoomList(roomid);
        setLoading(false)
        setRoom(rooms)
    }
    const handleChange=(e:RadioChangeEvent)=>{
        const roomid:string=e.target.value;
        loadRoom(roomid)

    }

    useEffect(() => {
        loadRoom("a1")
    }, [])


    const showImage=(src:string)=>{
        setSrc(src);
        setVisible(true)
    }

    return <div className="room">
        <Image
            width={200}
            style={{ display: 'none' }}
            preview={{
                visible,
                src: src,
                onVisibleChange: (value) => {
                    setVisible(value);
                },
            }}
        />
        <Card className="mb">
            <Radio.Group defaultValue="a1"  optionType="button"  buttonStyle="solid" onChange={handleChange}>
                <Radio.Button value="a1">A1 Building</Radio.Button>
                <Radio.Button value="a2">A2 Building</Radio.Button>
                <Radio.Button value="b1">B1 Building</Radio.Button>
                <Radio.Button value="b2">B2 Building</Radio.Button>
                <Radio.Button value="c1">C1 Building</Radio.Button>
                <Radio.Button value="c2">C2 Building</Radio.Button>
                <Radio.Button value="d1">SkyLoom International Tower A</Radio.Button>
                <Radio.Button value="d2">Financial Plaza</Radio.Button>
            </Radio.Group>
        </Card>
        <Spin spinning={loading}>
        <Row gutter={16}>
            {/* <Col span={6} className="item">
                <Card title="房间号" extra={<a onClick={()=>setVisible(true)}>户型图</a>}>
                    <h1>201</h1>
                    <div className="clearfix mt">
                        <p className="fl">装修情况：</p>
                        <p className="fr">毛坯</p>
                    </div>
                    <div className="clearfix mt">
                        <p className="fl">房间面积</p>
                        <p className="fr">100</p>
                    </div>
                    <div className="clearfix mt">
                        <p className="fl">出租单价</p>
                        <p className="fr">100</p>
                    </div>
                </Card>
            </Col> */}
            {
                room.map((item) => {
                    return <>
                        <Col span={6} className="item">
                            <Card title="No." extra={<a onClick={() => showImage(item.src)}>Floor Plan</a>}>
                                <h1>{item.roomNumber}</h1>
                                <div className="clearfix mt">
                                    <p className="fl">Decoration Type：</p>
                                    <p className="fr">{item.decorationType}</p>
                                </div>
                                <div className="clearfix mt">
                                    <p className="fl">Room Area</p>
                                    <p className="fr">{item.area}㎡</p>
                                </div>
                                <div className="clearfix mt">
                                    <p className="fl">Rent Price</p>
                                    <p className="fr">{item.unitPrice}$/㎡/Day</p>
                                </div>
                            </Card>
                        </Col>
                    </>
                })
            }
        </Row>
        </Spin>
    </div>
}

export default Room