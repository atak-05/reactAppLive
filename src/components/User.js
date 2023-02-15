import React, { Component } from "react";
import PropTypes from "prop-types"; //impt
import { VscAccount } from "react-icons/vsc";

class User extends Component {
  state = {
    isVisible: false,
  };
  //prop-types burada da static olarak tanımlayabiliriz.
  static defaultProps = {
    name: "Bilgi Yok",
    salary: "Bilgi Yok",
    deparment: "Bilgi Yok",
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isVisible: false,
  //   };
  // }
  //*arrow func.kullanmassak bu şekilde de bind() edebiliriz!
  // constructor(props) {
  //   super(props);
  //   this.onClickEvent = this.onClickEvent.bind(this);
  // }
  //*arrow function şeklindeyazarsak bind işlemi direk kendisi yapıyor..
  //*Kendi gönderdiğimiz değerler ilk olarak yazılıyor sonra event(e) yazılıyor!
  onClickEvent = (number, e) => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    //destructuring Assigment
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    //Destructing
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div
            className="card-header d-flex justify-content-between"
            onClick={this.onClickEvent.bind(this, 34)}
          >
            <h4 className="d-inline">{name}</h4>
            <VscAccount style={{ cursor: "pointer" }} />
          </div>
          {isVisible ? (
            <div className="card-body">
              <p className="card-text">Maaş: {salary} </p>
              <p className="card-text">Department: {department} </p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
//Prop-types used
User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  department: PropTypes.string.isRequired,
};
User.defaultProps = {
  //prop-types burada da static olarak tanımlayabiliriz.
  name: "Bilgi Yok",
  salary: "Bilgi Yok",
  deparment: "Bilgi Yok",
};
export default User;
