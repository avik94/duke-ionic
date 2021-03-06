import {EventEmitter} from '@angular/core';

export class MenuService {
    changeDisableValue = new EventEmitter<boolean>();
    formValue;

    setValue(data){
       this.formValue = data;
    }
    getValue(){
        return this.formValue; 
    }
}
