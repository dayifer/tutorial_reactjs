import './App.css';

function AboutPage() {
  return (
      <>
        <h1>Acerca de</h1>
        <p>Hola! ¿Cómo vas?</p>
      </>
  );
}

function MyButton() {
  return (
      <button>
        Soy un botón
      </button>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function App() {
  return (
      <div className="App-div">
        <AboutPage/>
        <h1>Bienvenido a mi aplicación</h1>
        <MyButton/>

        <>
          <h1>{user.name}</h1>
          <img
              className="App-avatar"
              src={user.imageUrl}
              alt={'Foto de ' + user.name}
              style={{
                width: user.imageSize,
                height: user.imageSize
              }}
          />
        </>

      </div>
  );
}