import React,{Component} from 'react';
import CounterContainer from './Counter_smart';
import SummaryContainer from './Summary_smart';

class ControlPanel extends Component {
    render() {
        return (
            <div>
                <CounterContainer caption="First"/>
                <CounterContainer caption="Second"/>
                <CounterContainer caption="Third"/>
                <hr/>
                <SummaryContainer/>
            </div>
        )
    }
}

export default ControlPanel;
