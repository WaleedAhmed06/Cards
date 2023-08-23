import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Card from './Components/Card';
import Input from './Components/Input';
import Select from './Components/Select';
import Table from './Components/Table';
function App() {
const [input, setInput] = useState("");
const [input2, setInput2] = useState("");
const [selectValue, setSelectValue] = useState("");
const [selectValue2, setSelectValue2] = useState("");
const [tableData, setTableData] = useState([]);
const [cardsData, setCardsData] = useState(false);


// Input Function that take username Value

const handleInput=(e)=>{

  setInput(e.target.value)
  console.log(e.target.value)
}
// Input Function that take Institute Value
const handleInput2=(e)=>{

  setInput2(e.target.value)
  console.log(e.target.value)
}

// Select Function that shows age menu
const handleSelect =(e)=>{
setSelectValue(e.target.value)
}
// Select Function that shows active menu
const handleSelect2 =(e)=>{
setSelectValue2(e.target.value)
}

// Button Function That Shows Data in Table
const handleClickData = ()=>{
setTableData([...tableData, { id: tableData.length + 1, userName: input, age: selectValue, institute:input2, isActive: selectValue2}],)
setInput("");
setInput2("");
setSelectValue("");
setSelectValue2("");

}

const handleToggle = ()=>{
setCardsData(!cardsData)
}



  return (
    <div className="App">
  <Input label="Name"
  type="text" value={input} onChange={handleInput}/>
  <Select
  label="Age"
  value={selectValue}
  onChange={handleSelect}
  optionList={[
    { value: '', label: 'Select Age' },
    { value: '18', label: '18' },
    { value: '20', label: '20' },
    { value: '22', label: '22' },
    { value: '24', label: '24' },
    { value: '26', label: '26' },
    { value: '30', label: '30' },
  ]}
/>
  <Select
  label="Active"
  value={selectValue2}
  onChange={handleSelect2}
  optionList={[
    { value: '', label: 'Select Age' },
    { value: false, label: "No" },
    { value: true, label: "Yes" },
  ]}
/>
  <Input label="Institute" type="text" value={input2} onChange={handleInput2}/>
  <Button label="Click" onClick={handleClickData}/>
  <br/>
  <br/>
  <br/>
  <Table
  data={tableData}
 
  />
    </div>
  );
}

export default App;
