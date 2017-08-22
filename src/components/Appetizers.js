import React, {Component} from 'react';

export default class Appetizers extends Component {

  render() {
    // Set items' value....
    // Since the items do not have a key, let's create one.
    let appetizers = this.props.items.map((item, i) => {
      // Increment the key for each item.
      return (
        <tbody key={i}>
          <tr>
            <td>
              {item.dish}
            </td>
            <td>
              {item.description}
            </td>
            <td>
              {item.price}
            </td>
          </tr>
        </tbody>
      )
    })
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
        <h4>Appetizers</h4>
          <table className="table">
            <thead>
              <tr>
                <th className="col-md-3">Dish</th>
                <th className="col-md-8">Description</th>
                <th className="col-md-1">Price</th>
              </tr>
            </thead>
            {appetizers}
          </table>
        </div>
      </div>
    );
  }
}
