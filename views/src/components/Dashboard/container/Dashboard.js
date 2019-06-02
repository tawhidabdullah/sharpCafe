import React, { Component } from 'react';
import AddNewRental from "../components/AddNewRental/AddNewRental";
import UserProfile from "../components/UserProfile/UserProfile";
export default class Dashboard extends Component {
    state = {
        isAddNewRental: false,
        isUserProfile: true
    };


    renderAddNewRental = () => {
        this.setState({
            isAddNewRental: true,
            isUserProfile: false
        })
    };

    renderUserProfile = () => {
        this.setState({
            isAddNewRental: false,
            isUserProfile: true
        })
    };


    render() {
        const {isAddNewRental, isUserProfile} = this.state; 
        return (
            <div class="container__of-dashboard">
                <header class="header">
                    {/* <img src="img/logo.png" alt="dashboard logo image" class="logo" /> */}
                    <form action="#" class="search">
                        <input type="text" class="search__input" placeholder="search yourself" />
                        <button class="search__button">

                        </button>
                    </form>
                    <nav class="user-nav">
                        {/* <div class="user-nav__icon-box">
                     
                        <span class="user-nav__notifiction user-nav__notifiction--1">34</span>
                    </div>
                    <div class="user-nav__icon-box">
                        
                        <span class="user-nav__notifiction user-nav__notifiction--2">4</span>
                    </div>
                    <div class="user-nav__user">
                        <img src="img/logo.png" alt="this is a user photo" class="user-nav__user-photo" />
                        <span class="user-nav__user-name">Tawhid</span>
                    </div> */}
                    </nav>
                </header>
                <div class="content">
                    <nav class="sidebar">
                        <ul class="side-nav">
                            <li class="side-nav__item">
                                <a href="#" class="side-nav__link">

                                    <span class="side-nav__text">home</span>
                                </a>
                            </li>
                            <li
                                class="side-nav__item "
                                onClick={this.renderAddNewRental}
                            >
                                <a href="#" class="side-nav__link side-nav__link">

                                    <span class="side-nav__text">Add New Rental</span>
                                </a>
                            </li>
                            <li class="side-nav__item">
                                <a href="#" class="side-nav__link">

                                    <span class="side-nav__text">Products</span>
                                </a>
                            </li>
                            <li
                                class="side-nav__item side-nav__item--active"
                                onClick={this.renderUserProfile}>
                                <a href="#" class="side-nav__link">

                                    <span class="side-nav__text">User Profile</span>
                                </a>
                            </li>
                        </ul>

                        <div class="legal">
                            &copy; 2018 copyright , All right reserve by Tawhid Abdullah
                    </div>
                    </nav>
                    <main class="dashboard__main-content">
                       {isAddNewRental ? <AddNewRental/> : ""}
                       {isUserProfile ? <UserProfile /> : ""}
                    </main>
                </div>
            </div>
        )
    }
}
