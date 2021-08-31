import React, { Component } from 'react';
import Section from 'components/Feedback/Section/Section';
import FeedbackOptions from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Feedback/Statistics/Statistics';
import PropTypes from 'prop-types';

class FeedbackSection extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
    initialTotal: 0,
    initialPercentage: 0,
    visible: false,
    options: ['Good', 'Neutral', 'Bad'],
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
    total: this.props.initialTotal,
    positivePercentage: this.props.initialPercentage,
    visible: this.props.visible,
  };

  handleFeedback = e => {
    const feedbackOption = e.target.dataset.option;

    this.setState(prev => ({
      [feedbackOption]: prev[feedbackOption] + 1,
      total: prev.total + 1,
      visible: true,
    }));

    this.setState(prev => ({
      positivePercentage: Math.round((prev.good / prev.total) * 100),
    }));
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleFeedback}
            options={this.props.options}
          />
        </Section>

        {this.state.visible ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
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
