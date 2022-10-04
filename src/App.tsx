import React, {useEffect} from 'react';

// @ts-ignore
const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  })

  const onClose = () => {
    tg.close()
  }
  return (
    <div className="App">
      hi {tg?.initDataUnSafe?.user?.username}
      <br />
      <button onClick={onClose}>close</button>
    </div>
  );
}

export default App;
