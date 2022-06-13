import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({number, Increase, Decrease}) =>{
    return (
        <Counter number={number} onIncrease={Increase} onDecrease={Decrease} />
    )
}

export default connect(
    state =>({
        number: state.counter
    }),
    {
        increase,
        decrease
    }
)(CounterContainer);