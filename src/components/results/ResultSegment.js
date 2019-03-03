export const ResultSegment = ({keyword = "No Keyword Retrieved", url = "No Url Found", email = "No Email Found", phone = "No Phone Number Found"}) => {
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
