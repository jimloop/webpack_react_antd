import React,{Component,ReactPropTypes} from 'react';
import store from './Store';
import * as Actions from './Actions';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = this.getOwnState();

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
        const value = this.state.count;
        const {caption} = this.props;

        return (
            <div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        );
    }
}

export default Counter;