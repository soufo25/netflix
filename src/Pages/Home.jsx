import React from 'react'
import Main from '../Components/Main';
import Row from '../Components/Row';
import requests from '../Request';


const Home = () => {
  return (
    <div>
    <Main />
    <Row rowID='1' title="Popular" fetchURL = {requests.requestPopular} />
    <Row rowID='2' title="Top Rated" fetchURL = {requests.requestTopRated} />
    <Row rowID='3' title="Trending" fetchURL = {requests.requestTrending} />
    <Row rowID='4' title="Upcoming" fetchURL = {requests.requestUpcoming} />
    </div>
  )
}

export default Home;
