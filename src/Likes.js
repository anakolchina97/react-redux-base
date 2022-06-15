import { connect } from 'react-redux';

function Likes({ like, onIncrementLike }) {
  return (
    <div className="button-controls">
      <button onClick={onIncrementLike}>❤ {like}</button>
      <button>Dislike</button>
    </div>
  );
}

function mapStateToProps(state) {
  console.log('mapStateToProps >  ', state);
  return {
    like: state.like,
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
