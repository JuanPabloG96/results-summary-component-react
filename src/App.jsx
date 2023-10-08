import { Results } from './Results'
import { Score } from './Score'
import { useFetch } from './js/useFetch'
import './css/App.css'

export function App() {
  const { data, loading } = useFetch('json/data.json');

  return (
    <article className="fm-app">
      <Results />
      <section className="fm-summary">
        <h3 className="fm-title">Summary</h3>
        <div className="fm-container">
          {loading && 'Loading...'}
          {data?.map(data => {
            return (
              <Score key={data.id} id={`score-${data.id}`} category={data.category} score={data.score} icon={data.icon} />
            )
          })}
        </div>
        <button className="fm-btn">Continue</button>
      </section>
    </article>
  )
}