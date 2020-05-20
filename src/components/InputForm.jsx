import React, {useState} from 'react'
import 'antd/dist/antd.css'
import { Input, Select, DatePicker, InputNumber, Button } from 'antd'
const { Option } = Select;

function InputForm() {
    const [titleInput,setTitleInput] = useState("");
    const [suffixInput,setSuffixInput] = useState("");
    const [userInput,setUserInput] = useState({});
    const [dobInput,setDobInput] = useState("null");
    const [investmentInput,setInvestmentInput] = useState(null);

    const titleChange = (value) => {
        // console.log(value)
        setTitleInput(value);
    }

    const suffixChange = (value) => {
        // console.log(value)
        setSuffixInput(value);
    }

    const dobChange = (value) => {
        // console.log(value);
        setDobInput(value);
    }

    const userInputChange = (e) => {
        let value = e.target.value;
        // console.log(value);
        let attributeName = e.target.getAttribute("name");
        // console.log(attributeName);
        setUserInput((prev)=> ({...prev, [attributeName]:value}))
        // console.log(userInput);
    }

    const investmentInputChange = (value) => {
        setInvestmentInput(value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(titleInput, suffixInput, userInput, dobInput, investmentInput);
    }

    const style = {
        pspacing: {
            margin: '8px 0 2px 4px'
        },
        titlefont: {
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            fontSize: '16px'
        },
        topdiv: {
            margin: "2%"
        },
        titles: {
            display: "inline-block"
        }
    }
    return (
        <div style={style.topdiv}>
            <div>
                <p style={{...style.titles, ...style.titlefont, width: '5%', margin: '0'}}>Title</p>
                <p style={{...style.titles, ...style.titlefont, width: '20%', margin: '0 3px'}}>First Name</p>
                <p style={{...style.titles, ...style.titlefont, width: '4%', margin: '0 3px'}}>MI</p>
                <p style={{...style.titles, ...style.titlefont, width: '20%', margin: '0 3px'}}>Last Name</p>
                <p style={{...style.titles, ...style.titlefont, width: '20%', margin: '0 3px'}}>Suffix</p>
            </div>
            <Input.Group compact>
                <Select defaultValue="" style={{ width: "5%" }} name="title-value" onChange={titleChange} size="large">
                    <Option value=""></Option>
                    <Option value="Dr.">Dr.</Option>
                    <Option value="Mr.">Mr.</Option>
                    <Option value="Mrs.">Mrs.</Option>
                    <Option value="Ms.">Ms.</Option>
                </Select>
                <Input style={{ width: '20%', margin: '0 3px' }} size="large" placeholder="First Name" name="first-name-value" onChange={userInputChange}/>
 
                <Input style={{ width: '4%', margin: '0 3px' }} size="large" placeholder="MI" name="mi-value" onChange={userInputChange}/>

                <Input style={{ width: '20%', margin: '0 3px' }} size="large" placeholder="Last Name" name="last-name-value" onChange={userInputChange}/>
                <Select defaultValue="" style={{ width: "5%" }} onChange={suffixChange} size="large">
                    <Option value=""></Option>
                    <Option value="Jr.">Jr.</Option>
                    <Option value="Md.">Md.</Option>
                    <Option value="PhD.">PhD.</Option>
                    <Option value="Sr.">Sr.</Option>
                </Select>
            </Input.Group>
            <br />

            <p style={{...style.pspacing,...style.titlefont}}>Email Address</p>
            <Input style={{ width: '20%' }} size="large" name="email-value" onChange={userInputChange}/>
            <br />
            <p style={{...style.pspacing,...style.titlefont}}>Password</p>
            <Input.Password style={{ width: '20%' }} size="large" name="password-value" onChange={userInputChange}/>
            <br />
            <p style={{...style.pspacing,...style.titlefont}}>Date of Birth</p>
            <DatePicker name="dob-value" onChange={dobChange} size="large"/>
            <br />
            <p style={{...style.pspacing,...style.titlefont}}>SSN</p>
            <Input style={{ width: '10%' }} size="large" placeholder="123-45-6789" name="ssn-value" maxLength="9" onChange={userInputChange}/>
            <br />
            <p style={{...style.pspacing,...style.titlefont}}>Investment Amount</p>
            <InputNumber
                defaultValue={0}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                style={{ width: '10%' }}
                name="investment-value"
                onChange={investmentInputChange}
                size="large"
            />
            <br />
            <Button style={{margin: '20px 0 0 0'}} onClick={submitForm} size="large">Submit</Button>
        </div>
    )
}

export default InputForm;