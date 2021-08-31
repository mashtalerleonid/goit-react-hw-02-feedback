import React, { Component } from 'react';
import Section from 'components/Feedback/Section/Section';
import FeedbackOptions from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Feedback/Statistics/Statistics';

class FeedbackSection extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
    options: ['Good', 'Neutral', 'Bad'],
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  handleFeedback = e => {
    const feedbackOption = e.target.dataset.option;

    this.setState(prev => ({
      [feedbackOption]: prev[feedbackOption] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

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
              good={good}
              neutral={neutral}
              bad={bad}
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
