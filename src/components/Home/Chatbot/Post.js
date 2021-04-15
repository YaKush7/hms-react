import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Post = (props) => {
    const [state, setState] = useState({ name: '', gender: '', age: '', phone: '', specialist: '', slot: '' });

    useEffect(() => {
        const { steps } = props;
        const { name, gender, age, phone, specialist, slot } = steps;
        setState({ name, gender, age, phone, specialist, slot });
    }, [props])

    const { name, gender, age, phone, specialist, slot } = state;
    if (name.value != null) {
        console.log("Name: " + name.value);
        console.log("Gender: " + gender.value);
        console.log("Age: " + age.value);
        console.log("Phone Number: " + phone.value);
        console.log("Doctor: " + specialist.value);
        console.log("Slot: " + slot.value);
    }

    return (null);
}

Post.propTypes = {
    steps: PropTypes.object,
};

Post.defaultProps = {
    steps: undefined,
};

export default Post;
