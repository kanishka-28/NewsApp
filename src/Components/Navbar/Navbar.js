import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">News Here 📰</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a></li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/technology">technology</a></li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/science">science</a></li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/health">health</a></li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/sports">Sports</a></li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/entertainment">entertainment</a></li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/business">business</a></li> */}
                                <li className="nav-item">
                                    <Link className="nav-Link active" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-Link active" aria-current="page" to="/technology">technology</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-Link active" aria-current="page" to="/science">science</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-Link active" aria-current="page" to="/health">health</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-Link active" aria-current="page" to="/sports">Sports</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-Link active" aria-current="page" to="/entertainment">entertainment</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-Link active" aria-current="page" to="/business">business</Link></li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className ="btn btn-outline-success" type ="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
