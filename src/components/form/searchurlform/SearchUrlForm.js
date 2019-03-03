class SearchUrlForm extends React.Component {
  state = { value: '' }
  newUrl = e =>
    this.setState({ value: e.target.value })

  submit = e => {
    console.log(`Url submission:  ${this.state.value}`);
    e.preventDefault();
  }
  render(){
    return(
      <section>
        <form onSubmit={this.submit}>
          <label>Enter a URL <input type="text" onChange={this.newUrl}/></label>
          <button>Scrape</button>
        </form>
      </section>
    )
  }
}
export default SearchUrlForm;
