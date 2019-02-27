import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let falseData = [
  {keyword: "Seattle Flowers", url: "https://www.seattlegrowers.com", email: "admin@seattlegrowers.com", phone: "425-330-3333"},
  {keyword: "Seattle Flowers", url: "https://www.thegarden.net", email: "admin@thegarden.net", phone: "425-333-3333"}
]

const ResultSegment = ({keyword, url, email, phone}) => {
  return(
    <section>
      <h2>{keyword}</h2>
      <ul>
        <li>{url}</li>
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
    </section>
  )
}

const Home = () => {
  return(
    <section>
      <h1>Home</h1>
      <p>About</p>
      <p>Search URL</p>
      <p>Search Keyword</p>
    </section>
  )
}

const SearchUrl = () => {
  return(
    <section>
      <p>Form for url</p>
      <button>Search</button>
    </section>
  )
}

const SearchKeyword = () => {
  return(
    <section>
      <p>Form for keyword</p>
      <button>Search</button>
    </section>
  )
}

class Results extends React.Component {
  state = {
    busy: false
  }
  render(){
    const {resultsegments} = this.props
    return(
      <div>
        <section>
          {resultsegments.map((resultsegment, i) =>
              <ResultSegment key={i} keyword={resultsegment.keyword} url={resultsegment.url} email={resultsegment.email} phone={resultsegment.phone} />
          )}
        </section>
      </div>
    )
  }
}

ReactDOM.render(<Results resultsegments={falseData} />, document.getElementById('root'));


serviceWorker.unregister();
