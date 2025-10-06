import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Card, DatePicker, Radio} from 'antd';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};


const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
function Article() {
    return <div>

        <Card>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Article Title"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Subtitle"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Publish Time"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <DatePicker placeholder="Select date" />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Visible Range"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Radio.Group >
                        <Radio value={1}>All</Radio>
                        <Radio value={2}>Property</Radio>
                        <Radio value={3}>Company</Radio>

                    </Radio.Group>
                </Form.Item>
                <Form.Item<FieldType>
                    label="Article Content"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </div>
}

export default Article