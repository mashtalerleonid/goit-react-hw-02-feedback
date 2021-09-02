import { FeedbakcTypes, Type } from './Statistics.styled';
import PropTypes from 'prop-types';

function Statistics({ options, state, total, positivePercentage }) {
  const keys = Object.keys(options);
  return (
    <div>
      <FeedbakcTypes>
        {keys.map(key => {
          return (
            <Type key={key}>
              {options[key]}: {state[key]}
            </Type>
          );
        })}
      </FeedbakcTypes>

      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  state: PropTypes.objectOf(PropTypes.number),
  options: PropTypes.objectOf(PropTypes.string),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
