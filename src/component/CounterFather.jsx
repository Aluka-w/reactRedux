import { connect } from "react-redux";
import Counter from './Counter'
import { addAction, reduceAction } from "../redux/action/action";
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    reduceClick: () => {
      console.log('减少操作')
      dispatch(reduceAction())
    },
    addClick: () => {
      console.log('增加操作')
      dispatch(addAction())
    }
  }
}

// Connected Component
const CounterFather = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
export default CounterFather