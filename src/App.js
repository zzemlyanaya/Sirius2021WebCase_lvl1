/**
 * @author Evgeniya Zemlyanaya @zzemlyanaya
 */
import logo from './logo.svg';
import rocket from './rocket.svg';
import './App.css';

function NameText(props) {
 return <h1 className="name">{props.name}</h1>;
}

function TextLink(props) {
 return <a href={props.link} target="_blank" className="link"> {props.text}</a>;
}

function ImageLogo(){
  return <img src={logo} alt="logo" />
}

function ImageRocket(){
  return <img className="imgSmall" src={rocket} alt="whooosh!" />
}

function App() {
  return (
    <div className="row">
      <div className="block">
         <p> <NameText name="Евгения Земляная" /> </p>
         <p> <TextLink link="https://github.com/zzemlyanaya" text="@zzemlyanaya" /> </p>
        <ImageRocket />
      </div>
      <div className="block">
        <ImageLogo />
      </div>
    </div>
  );
}

export default App;
