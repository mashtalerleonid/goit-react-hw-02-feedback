import React, { Component } from 'react';
import Section from 'components/Feedback/Section';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from 'components/Feedback/Statistics';
import Notification from 'components/Feedback/Notification';

// Зробив це завдання так, що для того, щоб добавити четверту, повністю працюючу опцію, потрібно добавити у код ЛИШЕ 1 рядок (той, що закоментований)

const options = {
  good: 'Good',
  neutral: 'Neutral',
  bad: 'Bad',
  // veryBad: 'Very bad',
};

class FeedbackSection extends Component {
  state = {
    feedbackTypes: Object.keys(options).reduce(
      (acc, option) => ({
        ...acc,
        [option]: 0,
      }),
      {},
    ),
  };

  handleFeedback = e => {
    const feedbackOption = e.target.dataset.option;
    this.setState(prev => ({
      feedbackTypes: {
        ...prev.feedbackTypes,
        [feedbackOption]: prev.feedbackTypes[feedbackOption] + 1,
      },
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state.feedbackTypes);
    return values.reduce((acc, values) => {
      return acc + values;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.feedbackTypes.good / this.countTotalFeedback()) * 100,
    );
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleFeedback}
            options={options}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              options={options}
              state={this.state.feedbackTypes}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
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
