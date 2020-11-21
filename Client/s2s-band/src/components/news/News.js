import React , {useState , useEffect} from "react";
import SideNav from "../SideNav/SideNav";
import "./News.css";
import Footer from "../footer/footer";
import vimage from "../../images/News/press1.png";
import timage from "../../images/News/press2.png";
import gimage from "../../images/News/v2.png";
import Axios from 'axios';

function Images() {
  return (
    <div className="imagecontainer-news">
      <a href="https://bit.ly/2B0AX9h" target="_blank" className="image1">
        <img src={vimage} alt="press"></img>
        <span className="caption">The National</span>
      </a>
      <a href="https://bit.ly/2n21qvM" target="_blank" className="image2">
        <img src={timage} alt="press2"></img>
        <span className="caption">
          Featured in Revolver Magazine BBC
          <br />
          Jan 2019 Issue
        </span>
      </a>
      <a href="https://bbc.in/2MrIDGd" target="_blank" className="image3">
        <img src={gimage} alt="press3"></img>
        <span className="caption">BBC Jan 2019 Issue </span>
      </a>
    </div>
  );
}

function News() {
  {/** decleration for the variable */}
  const [test1 , setTest1] = useState('');
  const [test2 , setTest2] = useState(0);
  const [testList , setTestList] = useState([]);
  const addToList = () => {
    //console.log() to test
    // console.log(test1 + test2);
    Axios.post("http://localhost:3001/news" , {
      test1 : test1,
      test2 : test2,
    });
  };
  useEffect(() => {
    Axios.get('http://localhost:3001/news').then((response) => {
      //console.log below hiye for testing if the data bel front-end
      // console.log(response.data);
      setTestList(response.data);

    })
  }, []);

  return (
    <div className="background-position Events">
      <SideNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div className="resonsive-overflow">
        <div className="container">
          <div className="background">
            <h1 className = "news">NEWS</h1>
            <hr />
            <Images />

            <Footer />
            {/* test la nchouf el data */}
            <div>
              <label>Test Data :</label> 
              <input type = "text" onChange = {(event) => {setTest1(event.target.value)}}/>
              <input type = "number" onChange = {(event) => {setTest2(event.target.value)}}/>
              <button onClick = {addToList}>Number</button>
              <h1 className = "news">Test List:</h1>
              {testList.slice(0).reverse().map((val , key) => {
                return <div key = {key} ><h1 className = "news">{val.test1}</h1><h1 className = "news">{val.test2}</h1></div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default News;
