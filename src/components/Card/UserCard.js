import React from 'react';

import classNames from 'classnames';

import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';

import Avatar from '../Avatar/Avatar';

const UserCard = ({ avatar, avatarSize, title, subtitle, text, children, className, ...restProps }) => {
    const classes = classNames('bg-gradient-theme', className);

    return (
        <Card inverse className={classes} {...restProps}>
            <CardBody className="d-flex justify-content-center align-items-center flex-column">
                <Avatar src={avatar} size={avatarSize} className="mb-2" />
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{subtitle}</CardSubtitle>
                <CardText>
                    <small>{text}</small>
                </CardText>
            </CardBody>
            {children}
        </Card>
    );
};

UserCard.defaultProps = {
    avatarSize: 80,
};

export default UserCard;
