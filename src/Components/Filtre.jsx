import React from 'react'

export default function Filtre({addItem}) {
  return (
    <div>
        <form onSubmit={addItem}>
        <label >Titre</label>
        <input type="text" name='title' placeholder='Titre' />
        <label >Description</label>
        <input type="text" name='description' placeholder='Description' />
        <label >posterURL</label>
        <input type="text" name='posterURL' placeholder='URL' />
        <label >Rating</label>
        <input type="number" name='rating' placeholder='Classement' />
        <button type='submit'>Ajouter un film</button>
        </form>
    </div>
  )
}
