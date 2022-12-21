import React from 'react'
import Main from '../Components/Main'
import requests from '../Request'
import Row from '../Components/Row'

const Home = () => {
  return (
    <div>
      <Main/>
      <Row rowID='1' title="Popular" fetchURL={requests.requestPopular}  />
      <Row rowID='2' title="Upcoming" fetchURL={requests.requestUpcoming}  />
      <Row rowID='3' title="Trending" fetchURL={requests.requestTrending}  />
      <Row rowID='4' title="Latest" fetchURL={requests.requestLatest}  />
      <Row rowID='5' title="TopRated" fetchURL={requests.requestTopRated}  />
    </div>
  )}
export default Home