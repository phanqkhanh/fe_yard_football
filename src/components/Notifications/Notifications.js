import React from 'react';

import { Media } from 'reactstrap';

import Avatar from '../Avatar/Avatar';

const Notifications = ({ notificationsData }) => {
    return (
        notificationsData &&
        notificationsData.length &&
        notificationsData.map(({ id, avatar, message, date }) => (
            <Media key={id} className="pb-2">
                <Media left className="align-self-center pr-3">
                    <Avatar tag={Media} object src={avatar} alt="Avatar" />
                </Media>
                <Media body middle className="align-self-center">
                    {message}
                </Media>
                <Media right className="align-self-center">
                    <small className="text-muted">{date}</small>
                </Media>
            </Media>
        ))
    );
};

Notifications.defaultProps = {
    notificationsData: [],
};

export default Notifications;
