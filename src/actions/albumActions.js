import { FETCH_ALBUMS } from './types';
import axios from 'axios';
let x = 0, newData = [];
let count = 10, page = 1;

export const fetchAlbums = () => dispatch => {

    if(x === 0){
        axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${count}`)
        .then(albums => {
          newData = albums.data
          console.log('First x=0:'+ newData)
          dispatch({
              type: FETCH_ALBUMS,
              payload: albums.data
          })
          page = page + 1
          x=1
      })
    }else{
        axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${count}`)
        .then(albums =>{
        //   console.log('Old:'+ newData.length)
          newData = [...newData,...albums.data]
        //   console.log('New:'+ newData.length)
          dispatch({
              type: FETCH_ALBUMS,
              payload: newData
          }) 
        page = page + 1
      })
    }
      
      
};