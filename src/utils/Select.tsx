import * as React from 'react';

function Select(props: any) {
    const renderOptions = () => {        
        return props.name.map((doc: any, idx: any) => (
            <option key={idx} value={doc.name}>{doc.name}{idx}</option>
        ))
    }
    const optionElement = renderOptions();
    
    return <select value={props.value} onChange={props.SelectOption}>{optionElement}</select>
}
export default Select;