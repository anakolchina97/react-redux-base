import { useSelector } from 'react-redux';
import { MutatingDots } from 'react-loader-spinner';

const Spin = (props) => {
  const spinner = useSelector((state) => state.appReducer.loading);

  return (
    <div className="loader-styles">
      <MutatingDots
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={spinner}
      />
    </div>
  );
};

export default Spin;
