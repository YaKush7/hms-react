import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Review = (props)  => {
  const [state, setState] = useState({ name: '', gender: '', age: '', phone: '',specialist:''});
  
  useEffect(() => {
    const { steps } = props;
    const { name, gender, age, phone,specialist } = steps;
    setState({ name, gender, age, phone,specialist });
  }, [props])

    const { name, gender, age, phone,specialist } = state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{phone.value}</td>
            </tr>
            <tr>
              <td>Specialist</td>
              <td>{specialist.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;
