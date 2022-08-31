import React, { Component } from 'react'
import axios from 'axios';

export default class AsyncComponent extends Component {
    constructor() {
    super();
    this.state = {
    data: null,
    loading: true,
    error: null
    }};

    componentDidMount() {this.getData()}
    
    getData = async () => {
        try {
        const response = await axios('https://randomuser.me/api/');
        console.log("Async Await Data en Try Catch:", response.data);
        } catch (error) {
        this.setState({error:error});
        } finally {
        this.setState({loading: false});
        }
    };

    render() {
        if(this.state.error) return `Error: ${this.state.error.message}`;
        return this.state.loading ? <p>Loading...</p> : <p>USANDO ASYNC AWAIT y TRY CATCH</p>
        }
}