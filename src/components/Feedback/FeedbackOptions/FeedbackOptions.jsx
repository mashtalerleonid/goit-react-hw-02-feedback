import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          data-option={option.toLowerCase()}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
