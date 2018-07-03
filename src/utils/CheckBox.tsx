import * as React from 'react';

function CheckBox(props: any) {
    return  <label><input type="checkbox" id={props.id} />{props.labelName}</label>
}
export default CheckBox;