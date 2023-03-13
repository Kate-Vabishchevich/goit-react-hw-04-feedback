import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const options = ['good', 'neutral', 'bad'];

    const onLeaveFeedback = e => {
        switch (e) {
            case 'good':
                setGood(prevGood => prevGood + 1);
                break;
            
            case 'neutral':
                setNeutral(prevNeutral => prevNeutral + 1);
                break;
            
            case 'bad':
                setBad(prevBad => prevBad + 1);
                break;
            
            default:
                return;
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        if (!total) {
            return 0;
        }
        const result = Math.round((good / total) * 100);
        return result;
    }
    
        const result = countPositiveFeedbackPercentage('good');
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options = {options}
                        onLeaveFeedback={onLeaveFeedback}>
                    </FeedbackOptions>
                </Section>

                {countTotalFeedback() === 0 ? (<Notification message='There is no feedback' />) : (
                    <Section title='Statistics'>
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={countTotalFeedback()}
                            positivePercentage={result}
                        ></Statistics>
                    </Section>
                )}
            </div>
        );
    }


export default Feedback;
