import { Card,Button,Descriptions } from "antd"
import { useNavigate,useSearchParams} from "react-router-dom"
import type { DescriptionsProps } from "antd";
const items: DescriptionsProps['items'] = [
    {
        key: '1',
        label: 'Contract Type',
        children: 'Lease Contract',
    },
    {
        key: '2',
        label: 'Contract Name',
        children: 'House Lease Contract Template',
    },
    {
        key: '3',
        label: 'Contract Start Date',
        children: '2023-03-05',
    },
    {
        key: '4',
        label: 'Contract End Date',
        children: '2024-03-05',
    },
    {
        key: '5',
        label: 'Party A',
        children: 'SkyLoom Digital Pty Ltd',
    },
    {
        key: '6',
        label: 'Party B',
        children: "HarborAI Solutions Pty Ltd",
        span: 3,
    },
    {
        key: '7',
        label: 'Approval Status',
        children: 'Approval Rejected',
    },
    {
        key: '8',
        label: 'Rejection Reason',
        children: 'Missing the legal representative’s seal',
    },
    {
        key: '9',
        label: 'Contact Phone',
        children: '0436892365',
    },
    {
        key: '10',
        label: 'Additional Terms',
        children: (
            <>
                1. Half-yearly payment, annual rent
                <br />
                2. The cost includes air conditioning 
                <br />
                3. Includes usage rights for two parking spaces, excluding charging stations
                <br />
                4. Renovation is prohibited from 9:00 to 18:00

            </>
        ),
    },
];

const items2: DescriptionsProps['items'] = [
    {
        key: '1',
        label: 'All Buildings',
        children: 'Building A1',
    },
    {
        key: '2',
        label: 'Room Number',
        children: '406',
    },
    {
        key: '3',
        label: 'House Area',
        children: '96㎡',
    },
    {
        key: '4',
        label: 'Billing Area',
        children: '70㎡',
    },
    {
        key: '5',
        label: 'Property Fee',
        children: '6800',
    },
    {
        key: '6',
        label: 'House Status',
        children: "Fully Furnished",
    },
    {
        key: '7',
        label: 'Property Manager',
        children: 'Olivia',
    },
    {
        key: '8',
        label: 'Manager Phone',
        children: '0432856901',
    },
];
function Surrender(){
    const navigate=useNavigate()
    const [searchParams]=useSearchParams()
    return <div>
        <Card>
            <Button type="primary" onClick={()=>navigate("/finance/contract?return=true")}>Back</Button>
        </Card>
        <Card className="mt">
            <Descriptions title={`Contract No.: ${searchParams.get("contractNo")}`} bordered items={items}/>
            <Descriptions title="Lease Room Information" bordered items={items2} className="mt"/>
        </Card>
    </div>
}

export default Surrender