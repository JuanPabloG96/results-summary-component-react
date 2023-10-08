import { useFetch } from "./js/useFetch"

export function Results() {
  const { data, loading } = useFetch('./src/json/data.json');
  let result = 0;
  data?.map(data => {
    result += data.score;
  })
  result = parseInt(result / 4)

  return (
    <section className="fm-results">
      <div className="fm-results-content">
        <h3 className="fm-results-title">Your result</h3>
        <div className="fm-results-container">
          <strong className="fm-results-prom">
            {loading && 'Loading...'}
            {result}
          </strong> of 100
        </div>
        <p className="fm-results-msg">Great</p>
        <p className="fm-results-paragraph">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  )
}