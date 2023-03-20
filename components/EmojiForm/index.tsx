import { useState } from 'react'

export const EmojiForm = () => {

const [emoji, setEmoji] = useState<string | ArrayBuffer | null>("")

const readFile = (evt: React.BaseSyntheticEvent) => {
  evt.preventDefault()
  const target = evt.target.emoji.files[0];

  const reader = new FileReader();
  reader.readAsDataURL(target)
  reader.onloadend = () => {
    const base64data = reader.result;
    setEmoji(base64data)
  }
}

return (
  <form onSubmit={readFile}>
    <label htmlFor="emoji">Upload an emoji</label>
    <input required type="file" id='emoji' name='emoji' />
    <button type='submit'>Submit</button>
    {emoji && <img src={emoji.toString()} />}
  </form>
  )
}