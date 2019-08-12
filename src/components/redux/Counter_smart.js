import React,{Component} from 'react';
import PropTypes from 'prop-types';
import store from "./Store";
import * as Actions from "./Actions";

class Counter extends Component{
    render() {
        const {caption,onIncrement,onDecrement,value} = this.props;

        return (
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <span>{caption} count:{value}</span>
            </div>
        )
    }
}

class CounterContainer extends Component{
    constructor(props){
        super(props);
        this.state=this.getOwnState();
    }

    getOwnState=()=>{
        return {
            count:store.getState()[this.props.caption]
        };
    }

    onIncrement=()=> {
        store.dispatch(Actions.increment(this.props.caption));
    }

    onDecrement=()=> {
        if(this.state.count===0){
            return;
        }
        store.dispatch(Actions.decrement(this.props.caption));
    }

    onChange=()=> {
        this.setState(this.getOwnState());
    }

    shouldComponentUpdate(nextProps, nextState,nextContext) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    render() {
        return <Counter
            caption={this.props.caption}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
            value={this.state.count} />
    }
}

CounterContainer.propTypes={
    caption:PropTypes.string.isRequired
}

export default CounterContainer;

