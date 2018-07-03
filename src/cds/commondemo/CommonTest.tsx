import * as React from 'react';
import CheckBox from '../../utils/CheckBox';
import Input from '../../utils/input';
import Select from '../../utils/Select';

const hotWords = [{ name: '全部' }, { name: '正确' }, { name: '错误' }, { name: '未处理' }];
const checkboxWords = [{ id: 'checkId1', name: '全部' }, { id: 'checkId2', name: '正确' }, { id: 'checkId3', name: '错误' }, { id: 'checkId3', name: '未处理' }];

interface IMyComponentState {
    selectVal: string
}

class CommonTest extends React.Component<IMyComponentState, any> {
    constructor(props: IMyComponentState) {
        super(props);
        this.optionSel = this.optionSel.bind(this);
        this.state = { selectVal: hotWords[0].name }
    }
    public renderCheckbox = () => {
        return checkboxWords.map((doc: any, idx: any) => (
            <CheckBox id={doc.id} labelName={doc.name} />
        ))
    }
    public optionSel(e: any) {
        const value = e.target.value;
        this.setState({ selectVal: value });
    }
    public render() {
        const Checkbox = this.renderCheckbox();
        return (
            <div>
                <div>
                    <Input />
                    <Select name={hotWords} value={this.state.selectVal} SelectOption={this.optionSel} />
                </div>
                <div>
                    {Checkbox}
                </div>
            </div>
        );
    }
}
export default CommonTest;