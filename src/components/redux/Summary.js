import React,{Component} from 'react';

import store from './Store';

class Summary extends Component{
    constructor(props){
        super(props);
        this.state=this.getOwnState();
    }

    onChange=()=>{
        this.setState(this.getOwnState());
    }

    getOwnState=()=>{
        const state=store.getState();
        let sum=0;
        for(const key in state){
            if(state.hasOwnProperty(key)){
                sum+=state[key];
            }
        }
        return {sum:sum};
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    shouldComponentUpdate(nextProps, nextState,nextContext) {
        return nextState.sum!==this.state.sum;
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    render() {
        const sum=this.state.sum;
        return (
            <div>Total Count:{sum}</div>
        );
    }
}

export default Summary;