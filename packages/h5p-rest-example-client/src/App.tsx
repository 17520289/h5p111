import React from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import ContentListComponent from './components/ContentListComponent';
import { ContentService, IContentService } from './services/ContentService';

import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.contentService = new ContentService('/h5p');
    }

    private contentService: IContentService;

    render() {
        return (
            <div className="App">
                <Container>
                    <h1>H5P NodeJs SPA Demo</h1>
                    <Alert variant="warning">
                        This demo is for debugging and demonstration purposes
                        only and not suitable for production use!
                    </Alert>
                    <ContentListComponent
                        contentService={this.contentService}
                    ></ContentListComponent>
                </Container>
            </div>
        );
    }
}
