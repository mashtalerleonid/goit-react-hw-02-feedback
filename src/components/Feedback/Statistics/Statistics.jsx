import { FeedbakcTypes, Type } from './Statistics.styled';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <FeedbakcTypes>
        <Type>Good: {good}</Type>
        <Type>Neutral: {neutral}</Type>
        <Type>Bad: {bad}</Type>
      </FeedbakcTypes>

      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
