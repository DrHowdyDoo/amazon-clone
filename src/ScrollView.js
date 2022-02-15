import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './ScrollView.css';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';

// list of items
const list = [
    { key: 1, url: 'https://images-eu.ssl-images-amazon.com/images/I/41uvn2XDdQL._AC_SX184_.jpg' },
    { key: 2, url: 'https://images-eu.ssl-images-amazon.com/images/I/81s6DUyQCZL._AC_UL200_SR184,264_.jpg' },
    { key: 3, url: 'https://images-eu.ssl-images-amazon.com/images/I/51TngkrkmsL._AC_SX184_.jpg' },
    { key: 4, url: 'https://images-eu.ssl-images-amazon.com/images/I/81gTwYAhU7L._AC_UL200_SR184,264_.jpg' },
    { key: 5, url: 'https://images-eu.ssl-images-amazon.com/images/I/91sOjvWTmIL._AC_SX184_.jpg' },
    { key: 6, url: 'https://images-eu.ssl-images-amazon.com/images/I/81k3%2B%2BL3AdL._AC_SX184_.jpg' },
    { key: 7, url: 'https://images-eu.ssl-images-amazon.com/images/I/710jnzKlDTL._AC_UL200_SR184,264_.jpg' },
    { key: 8, url: 'https://images-eu.ssl-images-amazon.com/images/I/717jDkVT%2BxL._AC_UL200_SR184,264_.jpg' },
    { key: 9, url: 'https://images-eu.ssl-images-amazon.com/images/I/91%2Bt0Di07FL._AC_UL200_SR184,264_.jpg' },
    { key: 10, url: 'https://images-eu.ssl-images-amazon.com/images/I/71JZ0neAP1L._AC_UL200_SR184,264_.jpg' },
    { key: 11, url: 'https://images-eu.ssl-images-amazon.com/images/I/81Tgm9TUORL._AC_SX184_.jpg' },
    { key: 12, url: 'https://images-eu.ssl-images-amazon.com/images/I/713jIoMO3UL._AC_UL200_SR184,264_.jpg' },
    { key: 13, url: 'https://images-eu.ssl-images-amazon.com/images/I/71t4GuxLCuL._AC_UL200_SR184,264_.jpg' },
    { key: 14, url: 'https://images-eu.ssl-images-amazon.com/images/I/41GAG05ZRQL._AC_UL200_SR184,264_.jpg' },
    { key: 15, url: 'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR184,264_.jpg' },
    { key: 16, url: 'https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR184,264_.jpg' },
    { key: 17, url: 'https://images-eu.ssl-images-amazon.com/images/I/717xa9IqrYL._AC_UL200_SR184,264_.jpg' },
    { key: 18, url: 'https://images-eu.ssl-images-amazon.com/images/I/81rsnHmlrbL._AC_UL200_SR184,264_.jpg' },
    { key: 19, url: 'https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR184,264_.jpg' }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected, key }) => {
    return <div
        className={`menu-item ${selected ? 'active' : ''}`}
    >
        <img className="book__cover" src={text} alt="" />
    </div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
    list.map(el => {
        const { url, key } = el;

        return <MenuItem text={url} key={key} selected={selected} />;
    });


const Arrow = ({ icon, className }) => {
    return (
        <div
            className={className}
        > {icon}
        </div>
    );
};


const ArrowLeft = Arrow({ icon: <ArrowBackIosRoundedIcon fontSize="small" />, className: 'arrow-prev' });
const ArrowRight = Arrow({ icon: <ArrowForwardIosRoundedIcon fontSize="small" />, className: 'arrow-next' });

const selected = 'item1';

class ScrollView extends Component {
    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(list, selected);
    }

    state = {
        selected
    };

    onSelect = key => {
        this.setState({ selected: key });
    }


    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = this.menuItems;

        return (
            <div className="Scroll__view">
                <h4 className="scrollview__header">Best Seller</h4>
                <h5 className="scrollview__Subheader">Books <MenuBookRoundedIcon /> </h5>
                <br></br>
                <ScrollMenu
                    alignCenter={false}
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                />
            </div>
        );
    }
}

export default ScrollView