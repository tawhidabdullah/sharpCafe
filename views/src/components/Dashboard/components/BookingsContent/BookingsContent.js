import React, { Component } from "react";
import "../../../../sass/components/Dashboard/_bookingsContent.scss";

class BookingsContent extends Component {
  state = {
    editProduct: false,
    title: "",
    desc: "",
    category: "",
    price: "",
    productImage: "",
    searchInput: ""
  };

  onMaterialButtonclick = () => {
   
  };

  componentWillMount() {
    
  }

  onProductEdit(id, product) {
    this.setState({
      title: product.title,
      desc: product.desc,
      category: product.category,
      price: product.price,
      productImage: product.productImage,
      editProduct: true
    });
  }

  onProductDelete = id => {
    this.props.deleteProductAction(id);
  };

  componentWillUpdate() {
    // this.props.getProductAction();
  }

  onSearchInputChange = e => {
    this.setState({
      searchInput: e.target.value.substr(0, 20)
    });
  };

  render() {
    return (
      <div>
        <div className="containerx">
          <div className="header-wrapper">
            <div className="title">Here is your Products, user.name!</div>
            <div className="note">
              Recent: <span className="focus">$250 </span>to{" "}
              <span className="focus">Best Buy</span> on Saturday, June 5.
            </div>
            <div class="produc-wrap searchwrap">
              <div class="search">
                <input
                  onChange={this.onSearchInputChange}
                  value={this.state.searchInput}
                  type="text"
                  class="searchTerm searchTerm__red"
                  placeholder="Search products by name.."
                />
                <button type="submit" class="searchButton searchButton__red">
                  <i class="fa fa-search" />
                </button>
              </div>
            </div>
            <span
              className="material-button"
              onClick={this.onMaterialButtonclick}
            >
              <i className="fa fa-plus" />
            </span>
          </div>
          <div className="content-wrapper">
              <div className="table-wrapper">
                <ul className="horizontal col header">
                  <li className="content dated-content">Updated Date</li>
                  <li className="content titled-content">Titles</li>
                  <li className="content desced-content ">Description</li>
                  <li className="content right  Remained-content">Remaining</li>
                </ul>
                <ul className="data col horizontal" >
                  <li className="content date-content">
                    <div>Nov 3</div>
                    <div className="secondary">4 months</div>
                  </li>
                  <li className="content has-image ">
                    {/* <img
                      className="img"
                      src={product.productImage}
                      alt={product.desc}
                    /> */}
                    <div>title</div>
                    <div className="secondary">category</div>
                  </li>
                  <li className="content desc-content">
                    <div>desc</div>
                    <div className="secondary">In stock</div>
                  </li>
                  <li className="content Remain-content">
                    <div id="price">price</div>
                    <div className="secondary">2.3</div>
                  </li>
                  <li className="content">
                    <div className="icon-wrapper">
                      <span
                        className="icon edit"
                        data-tooltip="Edit"
                       
                      />
                      <span
                        className="icon delete"
                        data-tooltip="Delete"
                        
                      />
                    </div>
                  </li>
                </ul>
                <ul className="data col horizontal" >
                  <li className="content date-content">
                    <div>Nov 3</div>
                    <div className="secondary">4 months</div>
                  </li>
                  <li className="content has-image ">
                    {/* <img
                      className="img"
                      src={product.productImage}
                      alt={product.desc}
                    /> */}
                    <div>title</div>
                    <div className="secondary">category</div>
                  </li>
                  <li className="content desc-content">
                    <div>desc</div>
                    <div className="secondary">In stock</div>
                  </li>
                  <li className="content Remain-content">
                    <div id="price">price</div>
                    <div className="secondary">2.3</div>
                  </li>
                  <li className="content">
                    <div className="icon-wrapper">
                      <span
                        className="icon edit"
                        data-tooltip="Edit"
                       
                      />
                      <span
                        className="icon delete"
                        data-tooltip="Delete"
                        
                      />
                    </div>
                  </li>
                </ul>
              
              </div>
       
          </div>
        </div>
      </div>
    );
  }
}



export default BookingsContent;
