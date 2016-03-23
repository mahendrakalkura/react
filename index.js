'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Item = React.createClass({
    getInitialState: function() {
        return {
            key: this.props.key,
            value: this.props.value
        };
    },
    onClick: function() {
        this.setState({
            value: new Date().getTime()
        });
    },
    render: function() {
        return (
            <div className="item">
                <h1 onClick={this.onClick}>{this.state.value}</h1>
                <p>{this.state.value}</p>
            </div>
        );
    }
});

var Items = React.createClass({
    getInitialState: function() {
        return {
            items: this.props.items
        };
    },
    onClick: function() {
        this.state.items.push({
            key: new Date().getTime(),
            value: new Date().getTime()
        });
        this.setState({
            items: this.state.items
        });
    },
    render: function() {
        var onClick = this.onClick;
        var items = this.state.items.map(function(item) {
            return (
                <Item key={item.key} value={item.value}></Item>
            );
        });
        return (
            <div className="items">
                <p>
                    <a className="btn btn-success" onClick={this.onClick}>Add</a>
                </p>
                {items}
            </div>
        );
    }
});

var items = [];
for (var index = 1; index <= 9999; index = index + 1) {
    items.push({
        key: index,
        value: index
    })
}

ReactDOM.render(
    <Items items={items}/>,
    document.getElementById('div')
);
