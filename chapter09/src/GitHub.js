import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Media, Form, Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

class GitHub extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            searchTerm: '',
            isLoading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //react hook
    //called when the component is first rendered
    // componentDidMount() {
    //     this.getGitHubData('J4d4');
    // }

    handleChange(e) {
        this.setState({ searchTerm: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isLoading: true
        })
        this.getGitHubData(this.state.searchTerm);
    }

    getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" + _searchTerm)
            .then(res => {
                //change state (no longer loading)
                this.setState({
                    isLoading: false,
                    //display users on webpage
                    data: res.data.items
                })
                //print results to console
                console.log(res.data.items);
            });
    }
    render() {
        const listUsers = this.state.data.map((user) =>
            <Media key={user.id}>
                <Nav.Link href={`/github/user/${user.login}/${user.id}`}>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={user.avatar_url}
                        alt="Generic placeholder"
                    />
                </Nav.Link>
                <Media.Body>
                    <h5>Login: {user.login}</h5>
                    <p>Id: {user.id}</p>
                </Media.Body>
            </Media>
        );
        return (
            <div>
                <Form inline onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formInlineName">
                        <Form.Control
                            type="text"
                            value={this.state.searchTerm}
                            placeholder="Enter Search Term"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    {' '}
                    <Button type="submit">
                        Search
                    </Button>
                </Form>
                <h3>GitHub User Results</h3>
                {this.state.isLoading &&
                    <ReactLoading type="spinningBubbles" color="#444" />
                }
                {listUsers}
            </div>
        );
    }
}
export default GitHub;