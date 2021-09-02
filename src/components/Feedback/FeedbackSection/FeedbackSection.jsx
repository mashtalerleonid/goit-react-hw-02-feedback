import React, { Component } from 'react';
import Section from 'components/Feedback/Section';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from 'components/Feedback/Statistics';

// Зробив це завдання так, що для того, щоб добавити четверту, повністю працюючу опцію, потрібно добавити у код ЛИШЕ 2 рядки (ті, що закоментовані)
class FeedbackSection extends Component {
  static defaultProps = {
    options: {
      good: 'Good',
      neutral: 'Neutral',
      bad: 'Bad',
      // veryBad: 'Very bad',
    },
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // veryBad: 0,
  };

  handleFeedback = e => {
    const feedbackOption = e.target.dataset.option;

    this.setState(prev => ({
      [feedbackOption]: prev[feedbackOption] + 1,
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
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleFeedback}
            options={this.props.options}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              options={this.props.options}
              state={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    );
  }
}

export default FeedbackSection;
