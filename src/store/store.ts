import {makeAutoObservable} from 'mobx';


class Store {
    autoCompleteSheet:string[] = [
        'C++', 'JavaScript', 'Python', 'TypeScript', 'Kotlin', 'C#', 'Prolog', 'R', 'Pascal', 'Swift',
        'Objective-C', 'Ruby', 'Go', 'Scala', 'Perl'
    ]
    sheet:string[] = []
    constructor() {
        makeAutoObservable(this)
    }
    get getSheet(){
        return this.sheet
    }
    setSheet = () =>{
       this.sheet = this.autoCompleteSheet
    }
    filteredSheet = (value:string) =>{
        this.sheet = this.sheet.filter(el => {
            const newEl = el.toLowerCase().slice(0, value.trim().length)
            return newEl === value.trim()
        })
    }
}

export const dropDownList = new Store()
