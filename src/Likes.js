import { connect } from 'react-redux';
import { incrementLikes, decrementLikes } from './redux/actions';

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
    onIncrementLike: () => dispatch(incrementLikes()),
    onDecrementLike: () => dispatch(decrementLikes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
