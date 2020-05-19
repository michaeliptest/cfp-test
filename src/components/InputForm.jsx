import React, {useState} from 'react'
import 'antd/dist/antd.css'
import { Input, Select, DatePicker, InputNumber, Button } from 'antd'
const { Option } = Select;

function InputForm() {
    const [titleInput,setTitleInput] = useState("");
    const [suffixInput,setSuffixInput] = useState("");
    const [userInput,setUserInput] = useState({});

    const titleChange = (value) => {
        console.log(value)
        setTitleInput(value);
    }

    const suffixChange = (value) => {
        console.log(value)
        setSuffixInput(value);
    }

    const style = {
        pspacing: {
            margin: '8px 0 4px 4px'
        }
    }
    return (
        <>
            <Input.Group compact>
                <Select defaultValue="Title" style={{ width: "5%" }} name="title-value" onChange={titleChange}>
                    <Option value=""></Option>
                    <Option value="Dr.">Dr.</Option>
                    <Option value="Mr.">Mr.</Option>
                    <Option value="Mrs.">Mrs.</Option>
                    <Option value="Ms.">Ms.</Option>
                </Select>
            
                <Input style={{ width: '20%', margin: '0 3px' }} size="middle" placeholder="First Name" name="first-name-value"/>

                <Input style={{ width: '3%', margin: '0 3px' }} size="middle" placeholder="MI" name="mi-value"/>

                <Input style={{ width: '20%', margin: '0 3px' }} size="middle" placeholder="Last Name" name="last-name-value"/>
                <Select defaultValue="Suffix" style={{ width: "5%" }} onChange={suffixChange}>
                    <Option value=""></Option>
                    <Option value="Jr.">Jr.</Option>
                    <Option value="Md.">Md.</Option>
                    <Option value="PhD.">PhD.</Option>
                    <Option value="Sr.">Sr.</Option>
                </Select>
            </Input.Group>
            <br />

            <p style={style.pspacing}>Email Address</p>
            <Input style={{ width: '20%' }} size="middle" name="email-value"/>
            <br />
            <p style={style.pspacing}>Password</p>
            <Input.Password style={{ width: '20%' }} size="middle" name="password-value"/>
            <br />
            <p style={style.pspacing}>Date of Birth</p>
            <DatePicker name="dob-value"/>
            <br />
            <p style={style.pspacing}>SSN</p>
            <Input style={{ width: '10%' }} size="middle" placeholder="123-45-6789" name="ssn-value"/>
            <br />
            <p style={style.pspacing}>Investment Amount</p>
            <InputNumber
                defaultValue={0}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                style={{ width: '10%' }}
                name="investment-value"
            />
            <br />
            <Button style={{margin: '20px'}}>Submit</Button>
        </>
    )
}

export default InputForm;