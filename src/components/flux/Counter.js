import React from 'react';
import CounterStore from "./CounterStore";
import * as Actions from './Actions';
import {Button} from 'antd';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:CounterStore.getCounterValues()[props.caption],
        }
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange);
    }

    onChange=()=>{
        const newCount=CounterStore.getCounterValues()[this.props.caption];
        this.setState({count:newCount});
    }

    onClickIncrementButton=()=>{
        Actions.increment(this.props.caption);
    }

    onClickDecrementButton=()=>{
        if(this.state.count===0){
            return;
        }
        Actions.decrement(this.props.caption);
    }

    render() {
        const {caption} = this.props;
        return (
            <div>
                <Button onClick={this.onClickIncrementButton}>
                    +
                </Button>
                <span>{caption} count:{this.state.count}</span>
                <Button onClick={this.onClickDecrementButton}>-</Button>

            </div>
        )
    }

}

export default Counter;