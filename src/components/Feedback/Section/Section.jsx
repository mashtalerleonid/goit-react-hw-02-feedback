// import FeedbackBtns from './components/Feedback/FeedbackBtns/FeedbackBtns';
// import Statistics from './components/Feedback/Statistics/Statistics';

import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
