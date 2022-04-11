import React from 'react';
import {observer} from 'mobx-react-lite';

type DropListType = {
    sheet: string[]
    setValueFromDropDownList: (value: string) =>void
}
const DropList = observer(({sheet, setValueFromDropDownList}:DropListType) => {
    return (
        <ul className="dropdownList">
            {sheet.map(el => {
                return <li key={el} onClick={() => setValueFromDropDownList(el)}>{el}</li>
            })}
        </ul>
    );
});

export default DropList;
