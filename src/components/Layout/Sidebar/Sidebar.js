import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavItem, NavLink as BSNavLink } from 'reactstrap';
import {
    FaGithub,
    MdAccountCircle,
    MdArrowDropDownCircle,
    MdBorderAll,
    MdBrush,
    MdChromeReaderMode,
    MdDashboard,
    MdExtension,
    MdGroupWork,
    MdInsertChart,
    MdKeyboardArrowDown,
    MdNotificationsActive,
    MdPages,
    MdRadioButtonChecked,
    MdSend,
    MdStar,
    MdTextFields,
    MdViewCarousel,
    MdViewDay,
    MdViewList,
    MdWeb,
    MdWidgets,
} from 'react-icons/md';
import bn from '../../../utils/bemnames';
import logo200Image from '../../../assets/images/logo.png';
import sidebarBgImage from '../../../assets/images/logo.png';
// import SourceLink from 'components/SourceLink';

const sidebarBackground = {
    backgroundImage: `url("${sidebarBgImage}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

const navComponents = [
    { to: '/buttons', name: 'buttons', exact: false, Icon: MdRadioButtonChecked },
    {
        to: '/button-groups',
        name: 'button groups',
        exact: false,
        Icon: MdGroupWork,
    },
    { to: '/forms', name: 'forms', exact: false, Icon: MdChromeReaderMode },
    { to: '/input-groups', name: 'input groups', exact: false, Icon: MdViewList },
    {
        to: '/dropdowns',
        name: 'dropdowns',
        exact: false,
        Icon: MdArrowDropDownCircle,
    },
    { to: '/badges', name: 'badges', exact: false, Icon: MdStar },
    { to: '/alerts', name: 'alerts', exact: false, Icon: MdNotificationsActive },
    { to: '/progress', name: 'progress', exact: false, Icon: MdBrush },
    { to: '/modals', name: 'modals', exact: false, Icon: MdViewDay },
];

const navContents = [
    { to: '/typography', name: 'typography', exact: false, Icon: MdTextFields },
    { to: '/tables', name: 'tables', exact: false, Icon: MdBorderAll },
];

const pageContents = [
    { to: '/login', name: 'login / signup', exact: false, Icon: MdAccountCircle },
    {
        to: '/login-modal',
        name: 'login modal',
        exact: false,
        Icon: MdViewCarousel,
    },
];

const navItems = [
    { to: '/', name: 'dashboard', exact: true, Icon: MdDashboard },
    { to: '/cards', name: 'cards', exact: false, Icon: MdWeb },
    { to: '/charts', name: 'charts', exact: false, Icon: MdInsertChart },
    { to: '/widgets', name: 'widgets', exact: false, Icon: MdWidgets },
];

const bem = bn.create('sidebar');

const Sidebar = () => {
    const [isOpenComponents, setIsOpenComponents] = useState(true);
    const [isOpenContents, setIsOpenContents] = useState(true);
    const [isOpenPages, setIsOpenPages] = useState(true);

    const toggleCollapse = (name) => {
        if (name === 'Components') {
            setIsOpenComponents((prevOpen) => !prevOpen);
        } else if (name === 'Contents') {
            setIsOpenContents((prevOpen) => !prevOpen);
        } else if (name === 'Pages') {
            setIsOpenPages((prevOpen) => !prevOpen);
        }
    };

    return (
        <>
            <aside className={bem.b()} data-image={sidebarBgImage}>
                <div className={bem.e('background')} style={sidebarBackground} />
                <div className={bem.e('content')}>
                    <Navbar style={{ display: 'flex', justifyContent: 'center' }}>
                        {/* <SourceLink className="navbar-brand d-flex">
                            <img src={logo200Image} width="40" height="30" className="pr-2" alt="" />
                            <span className="text-white">
                                Reduction <FaGithub />
                            </span>
                        </SourceLink> */}
                        <div>
                            <h6>ADMIN</h6>
                        </div>
                    </Navbar>
                    <Nav vertical>
                        {navItems.map(({ to, name, exact, Icon }, index) => (
                            <NavItem key={index} className={bem.e('nav-item')}>
                                <BSNavLink
                                    id={`navItem-${name}-${index}`}
                                    className="text-uppercase"
                                    tag={NavLink}
                                    to={to}
                                    activeClassName="active"
                                    exact={exact}
                                >
                                    <Icon className={bem.e('nav-item-icon')} />
                                    <span className="">{name}</span>
                                </BSNavLink>
                            </NavItem>
                        ))}

                        <NavItem className={bem.e('nav-item')} onClick={() => toggleCollapse('Components')}>
                            <BSNavLink className={bem.e('nav-item-collapse')}>
                                <div className="d-flex">
                                    <MdExtension className={bem.e('nav-item-icon')} />
                                    <span className=" align-self-start">Components</span>
                                </div>
                                <MdKeyboardArrowDown
                                    className={bem.e('nav-item-icon')}
                                    style={{
                                        padding: 0,
                                        transform: isOpenComponents ? 'rotate(0deg)' : 'rotate(-90deg)',
                                        transitionDuration: '0.3s',
                                        transitionProperty: 'transform',
                                    }}
                                />
                            </BSNavLink>
                        </NavItem>
                        <Collapse isOpen={isOpenComponents}>
                            {navComponents.map(({ to, name, exact, Icon }, index) => (
                                <NavItem key={index} className={bem.e('nav-item')}>
                                    <BSNavLink
                                        id={`navItem-${name}-${index}`}
                                        className="text-uppercase"
                                        tag={NavLink}
                                        to={to}
                                        activeClassName="active"
                                        exact={exact}
                                    >
                                        <Icon className={bem.e('nav-item-icon')} />
                                        <span className="">{name}</span>
                                    </BSNavLink>
                                </NavItem>
                            ))}
                        </Collapse>

                        <NavItem className={bem.e('nav-item')} onClick={() => toggleCollapse('Contents')}>
                            <BSNavLink className={bem.e('nav-item-collapse')}>
                                <div className="d-flex">
                                    <MdSend className={bem.e('nav-item-icon')} />
                                    <span className="">Contents</span>
                                </div>
                                <MdKeyboardArrowDown
                                    className={bem.e('nav-item-icon')}
                                    style={{
                                        padding: 0,
                                        transform: isOpenContents ? 'rotate(0deg)' : 'rotate(-90deg)',
                                        transitionDuration: '0.3s',
                                        transitionProperty: 'transform',
                                    }}
                                />
                            </BSNavLink>
                        </NavItem>
                        <Collapse isOpen={isOpenContents}>
                            {navContents.map(({ to, name, exact, Icon }, index) => (
                                <NavItem key={index} className={bem.e('nav-item')}>
                                    <BSNavLink
                                        id={`navItem-${name}-${index}`}
                                        className="text-uppercase"
                                        tag={NavLink}
                                        to={to}
                                        activeClassName="active"
                                        exact={exact}
                                    >
                                        <Icon className={bem.e('nav-item-icon')} />
                                        <span className="">{name}</span>
                                    </BSNavLink>
                                </NavItem>
                            ))}
                        </Collapse>

                        <NavItem className={bem.e('nav-item')} onClick={() => toggleCollapse('Pages')}>
                            <BSNavLink className={bem.e('nav-item-collapse')}>
                                <div className="d-flex">
                                    <MdPages className={bem.e('nav-item-icon')} />
                                    <span className="">Pages</span>
                                </div>
                                <MdKeyboardArrowDown
                                    className={bem.e('nav-item-icon')}
                                    style={{
                                        padding: 0,
                                        transform: isOpenPages ? 'rotate(0deg)' : 'rotate(-90deg)',
                                        transitionDuration: '0.3s',
                                        transitionProperty: 'transform',
                                    }}
                                />
                            </BSNavLink>
                        </NavItem>
                        <Collapse isOpen={isOpenPages}>
                            {pageContents.map(({ to, name, exact, Icon }, index) => (
                                <NavItem key={index} className={bem.e('nav-item')}>
                                    <BSNavLink
                                        id={`navItem-${name}-${index}`}
                                        className="text-uppercase"
                                        tag={NavLink}
                                        to={to}
                                        activeClassName="active"
                                        exact={exact}
                                    >
                                        <Icon className={bem.e('nav-item-icon')} />
                                        <span className="">{name}</span>
                                    </BSNavLink>
                                </NavItem>
                            ))}
                        </Collapse>
                    </Nav>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
