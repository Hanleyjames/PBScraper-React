import ResultSegment from './ResultSegment';

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

export default Results;
