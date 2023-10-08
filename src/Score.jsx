export function Score({id, category, score, icon}) {
  const altText = `${category} icon`
  return (
    <article className="fm-score" id={id}>
      <div className="fm-score-container">
        <img src={icon} alt={altText} />
        <h3 className="fm-score-category">{category}</h3>
      </div>
      <p className="fm-score-text"><span className="fm-score-result">{score}</span> / 100</p>
    </article>
  )
}