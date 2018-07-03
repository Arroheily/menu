import * as React from 'react';

function formProvider(fields: any) {
    return (Comp: any) => {
        // const initialFormState = {};


        class FormComponent extends React.Component {
            public render() {
                return (
                    <div>123</div>
                );
            }
        }
        return FormComponent;
    }
}
export default formProvider;