import React from 'react'

export default function MovieList({film, filmTrouve}) {
  return (
    <div>
        {filmTrouve.length !== 0     ? filmTrouve.map(v => {
            return(
                <div>
                    <h3>{v.title}</h3>
                    <h3>{v.description}</h3>
                    <h4>{v.posterURL}</h4>
                    <h4>{v.rating}</h4>
                </div>
            )
        } ) : film.map(e => {
            return(
                <div>
                    <h3>{e.title}</h3>
                    <h3>{e.description}</h3>
                    <h4>{e.posterURL}</h4>
                    <h4>{e.rating}</h4>
                </div>
            )
        })}
    </div>
  )
}
