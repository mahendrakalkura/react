'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Item = React.createClass({
    render: function() {
        return (
            <div className="item">
                <h1>{this.props.value}</h1>
                <p>{this.props.value}</p>
            </div>
        );
    }
});

var Items = React.createClass({
    render: function() {
        var items = this.props.items.map(function(item) {
            return (
                <Item key={item.key} value={item.value}></Item>
            );
        });
        return (
            <div className="items">{items}</div>
        );
    }
});

var items = [];
for (var index = 0; index <= 999; index = index + 1) {
    items.push({
        key: index,
        value: index
    });
}

ReactDOM.render(
    <Items items={items}/>,
    document.getElementById('div')
);
