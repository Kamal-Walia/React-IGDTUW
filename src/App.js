import './App.css';
import Images from './sample'

function App({counter, name}) {
  return (
     <div style={{display:'flex', maxWidth: 1000, flexWrap: 'wrap', paddingLeft: '25%', paddingRight: '25%'}}>
      Hello From Functional Component {counter} {name}
      {/* {
        Images.map(item => {
          return (
            <div style={{padding:10, borderWidth:1, borderStyle:'groove', margin:6}}>
              <img src={item["product-image-url"]} height={250} width={250} />
              </div>
          )
        }
        )
      } */}
       </div>

  );
}

export default App;

