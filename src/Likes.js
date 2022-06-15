import { connect } from 'react-redux';

function Likes({ like, onIncrementLike, onDecrementLike }) {
  return (
    <div className="button-controls">
      <button onClick={onIncrementLike}>❤ {like}</button>
      <button onClick={onDecrementLike}>Dislike</button>
    </div>
  );
}

function mapStateToProps(state) {
  const { likesReducer } = state;
  return {
    like: likesReducer.like,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLike: () => {
      const action = {
        type: 'INCREMENT',
      };
      dispatch(action);
    },
    onDecrementLike: () => {
      const action = {
        type: 'DECREMENT',
      };
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
