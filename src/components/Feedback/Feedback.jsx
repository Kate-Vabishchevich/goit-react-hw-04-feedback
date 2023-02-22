import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    };

    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        const { good } = this.state;
        if (!total) {
            return 0;
        }
        const result = Math.round((good / total) * 100);
        return Number(result);
    }

    onLeaveFeedback = name => {
        this.setState(prevState => {
            return { [name]: prevState[name] + 1 }
        });
    };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const result = this.countPositiveFeedbackPercentage('good');
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={this.onLeaveFeedback}>
                    </FeedbackOptions>
                </Section>

                {total === 0 ? (<Notification message='There is no feedback' />) : (
                    <Section title='Statistics'>
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={result}
                        ></Statistics>
                    </Section>
                )}
            </div>
        );
    }
}

export default Feedback;