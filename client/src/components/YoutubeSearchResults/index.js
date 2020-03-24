import React, { Component } from "react";
import ReactPlayer from "react-player"
import { Card, Row, Col } from "react-bootstrap";

class YoutubeSearchResults extends Component {
    state = {
        activeVideo: null
    }

    playVideo(video) {
        this.setState({activeVideo: video})
    }

    render() {
        return (
            <React.Fragment>
                {this.props.videos.map((video, i) => (
                    <Card key={i} onClick={() => { this.playVideo(video)}}>
                        <Card.Header>
                            <Row>
                                <Col md={3}>
                                    <img src={video.snippet.thumbnails.default.url} />
                                </Col>
                                <Col>
                                    {video.snippet.title}
                                </Col>
                            </Row>
                        </Card.Header>
                        { this.state.activeVideo && this.state.activeVideo === video && (
                            <Card.Body>
                                <ReactPlayer url={`https://youtube.com/watch?v=${this.state.activeVideo.id.videoId}`} width="100%" height="100%" playing/>
                            </Card.Body>
                        )}
                    </Card>
                ))}
            </React.Fragment>
        )
    }
}

export default YoutubeSearchResults;
