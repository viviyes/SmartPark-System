import { Modal, Row, Col, Form, Input ,Radio, message} from "antd"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { editUser } from "../../api/userList";
interface FormProps {
    visible: boolean;
    hideModal: () => void;
    title: string;
    loadData:()=>void
}

function UserForm(props: FormProps) {
    const [form]=Form.useForm();
    const {userData}= useSelector((state:any)=>state.userSlice)
    const { visible, hideModal, title,loadData } = props
    const handleOk=()=>{
        form.validateFields().then(async (res)=>{
            const {data}=await editUser(res);
            message.success(data)
            hideModal();
            loadData()
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        title=="新增企业"? form.resetFields():form.setFieldsValue(userData)
    },[visible])
    return <>
        <Modal
            title={title}
            open={visible}
            onCancel={hideModal}
            width={800}
            onOk={handleOk}
        >
            <Form
                form={form}
                labelCol={{span:8}}
                wrapperCol={{span:16}}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Customer Name"
                            name="name"
                            rules={[{ required: true, message: "Customer Name can not be empty" }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Phone"
                            name="tel"
                            rules={[{ required: true, message: "Phone can not be empty" },{pattern:/^1[3-9]\d{9}$/,message:"Please enter a valid phone number"}]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Business Status"
                            name="status"
                            rules={[{ required: true, message: "Business Status can not be empty" }]}
                        >
                            <Radio.Group>
                                <Radio value="1">In Business</Radio>
                                <Radio value="2">Suspended Business</Radio>
                                <Radio value="3">Closed</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Industry"
                            name="business"
                            rules={[{ required: true, message: "Industry can not be empty" }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: "Email can not be empty" }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Credit Code"
                            name="creditCode"
                            rules={[{ required: true, message: "Credit Code can not be empty" }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Industry Num"
                            name="industryNum"
                            rules={[{ required: true, message: "Industry Num can not be empty" }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Organization Code"
                            name="organizationCode"
                            rules={[{ required: true, message: "Organization Code can not be empty" }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Legal Person"
                            name="legalPerson"
                            rules={[{ required: true, message: "Legal Person can not be empty" }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>

    </>
}
export default UserForm