import React, { Component } from 'react';
// import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { fetchAlbums } from '../actions/albumActions';

export class Albums extends Component {
  // state = {
  //   albums: [],
  //   count: 10,
  //   // start: 1,
  //   page: 1,
  // };

  componentDidMount() {
    this.props.fetchAlbums()
  }

  // componentDidMount() {
  //   const { count, page } = this.state;
  //   axios
  //   .get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${count}`)
  //     .then(res => this.setState({ albums: res.data }));
  // }

  fetchStateAlbums = () => {
    // const { count, page } = this.state;
    // this.setState({ page: page + 1 });
    this.props.fetchAlbums()
    // axios
    // .get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${count}`)
    //   .then(res =>
    //     this.setState({ albums: this.state.albums.concat(res.data) })
    //   );
  };

  render() {
    return (
      <div className='albums'>
        <InfiniteScroll
          dataLength={this.props.albums.length}
          next={this.fetchStateAlbums}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.props.albums.map(album => (
            // <Album key={albums.id} albums={albums} />
            <div key={album.id}>
                <h3>{album.id}</h3>
                <h3>{album.title}</h3>
                <h3>{album.url}</h3>
                <hr/>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps=state=>({
  albums:state.album.items,
});

export default connect(mapStateToProps, { fetchAlbums })(Albums);
// export default Albums;
