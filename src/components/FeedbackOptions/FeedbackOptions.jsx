import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {Object.keys(options).map(key => (
        <button
          key={key}
          type="button"
          className={css.item}
          onClick={() => {
            onLeaveFeedback(key);
          }}
        >
          {`${key}`}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
