import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Modal from './Modal';
import DropList from './DropList';
import SvgInput from './SvgInput';
import {observer} from 'mobx-react-lite'
import {dropDownList} from './store/store';

function App() {
    const [value, setValue] = useState('')
    const [open, setOpen] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [isClickedOnArrow, setIsClickedOnArrow] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dropDownList.setSheet()
        const inputValue = e.currentTarget.value.toLowerCase()
        setValue(inputValue)
        if (inputValue.trim() === '') {
            setOpen(false)
        } else {
            setOpen(true)
            dropDownList.filteredSheet(inputValue)
        }
    }
    const clearInput = () => {
        setValue('')
        dropDownList.setSheet()
        setOpen(false)
    }
    const setValueFromDropDownList = (value: string) => {
        setValue(value)
        setOpen(false)
    }
    const openDropList = () => {
        if(open){
            setOpen(false)
        }else{
            dropDownList.setSheet()
            setIsClickedOnArrow(!isClickedOnArrow)
        }
    }
    const closeList = ()=>{
        setOpen(false)
        setIsClickedOnArrow(false)
    }
    return (
        <div className="wrapper" onClick={closeList}>
            <div className="wrapper-input">
                <input type="text"
                       className="input"
                       value={value}
                       onChange={onChangeHandler}
                       onFocus={() => setOpen(false)}
                />
                <SvgInput openDropList={openDropList}
                          setModalIsOpen={setModalIsOpen}
                          clearInput={clearInput}/>
                {
                    open && dropDownList.getSheet.length || isClickedOnArrow
                        ?
                        <DropList sheet={dropDownList.getSheet}
                                  setValueFromDropDownList={setValueFromDropDownList}/>
                        : ''
                }
            </div>
            {
                modalIsOpen
                &&
                <Modal value={value} setModalIsOpen={setModalIsOpen}/>
            }
        </div>
    );
}

export default observer(App);
