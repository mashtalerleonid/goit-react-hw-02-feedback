import React, { Component } from 'react';
import Section from 'components/Feedback/Section';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from 'components/Feedback/Statistics';
import Notification from 'components/Feedback/Notification';

const options = {
  good: 'Good',
  neutral: 'Neutral',
  bad: 'Bad',
  // veryBad: 'Very bad',
};

class FeedbackSection extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // veryBad:0,

    // feedbackTypes: Object.keys(options).reduce(
    //   (acc, option) => ({
    //     ...acc,
    //     [option]: 0,
    //   }),
    //   {},
    // ),
  };

  handleFeedback = e => {
    const feedbackOption = e.target.dataset.option;
    this.setState(prev => ({
      [feedbackOption]: prev[feedbackOption] + 1,

      // feedbackTypes: {
      //   ...prev.feedbackTypes,
      //   [feedbackOption]: prev.feedbackTypes[feedbackOption] + 1,
      // },
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, values) => {
      return acc + values;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleFeedback}
            options={options}
          />
        </Section>
        {totalFeedback ? (
          <Section title="Statistics">
            <Statistics
              options={options}
              state={this.state}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </div>
    );
  }
}

export default FeedbackSection;
