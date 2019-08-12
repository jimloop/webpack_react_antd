import React from 'react';
import SummaryStore from './SummaryStore';
class Summary extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sum:SummaryStore.getSummary()
        }
    }

    componentDidMount() {
        SummaryStore.addChangeListener(this.onChange);
    }
    componentWillUnmount() {
        SummaryStore.removeChangeListener(this.onChange);
    }
    onChange=()=>{
        const newCount=SummaryStore.getSummary();
        this.setState({sum:newCount});
    }

    render() {
        return (
            <div>Total Count:{this.state.sum}</div>
        )
    }
}

export default Summary;