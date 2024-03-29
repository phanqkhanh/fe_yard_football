import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import userImage from '../../assets/images/avt.jpg';

const Avatar = ({ rounded, circle, src, size, tag: Tag, className, style, ...restProps }) => {
    const classes = classNames({ 'rounded-circle': circle, rounded }, className);
    return <Tag src={src} style={{ width: size, height: size, ...style }} className={classes} {...restProps} />;
};

Avatar.propTypes = {
    tag: PropTypes.elementType,
    rounded: PropTypes.bool,
    circle: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    src: PropTypes.string,
    style: PropTypes.object,
};

Avatar.defaultProps = {
    tag: 'img',
    rounded: false,
    circle: true,
    size: 40,
    src: userImage,
    style: {},
};

export default Avatar;
