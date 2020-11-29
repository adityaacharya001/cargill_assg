import React,{useState, useEffect} from 'react';
import Card from './card';

import "./style.css";

function Panel(props) {
    const { data } = props;
    const [showData, setShowData] = useState(data);
    const [searchPara, setSearchPara] = useState(null);
    const [searchWord, setSearchWord] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [id, setId] = useState(null);
    console.log("id", id);

    const sortData = (e)=>{
        if(e.target.value==="ascending"){
            setShowData(showData.sort((a, b) => a.population - b.population).slice(0))
        }else{
            setShowData(showData.sort((a, b) => b.population - a.population).slice(0))
        }
    }

    const onCardClickHandler = (index) => {
        setId(index);
    }

    const onChangeHandler = (e)=>{
      setSearchWord(e.target.value);
    }

    const onClickHandler = (e)=>{
     setSearchPara(e.target.value);
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        if(searchPara==="Country Code"){
            if (data.filter(item => searchWord === item.alpha3Code).length){
                setShowData(data.filter(item => searchWord === item.alpha3Code));
                setErrMsg('');
            }else{
                setErrMsg("Try entering a available and valid country code")
            }
        }
        else if (searchPara === "Country Name") {
            if (data.filter(item => searchWord === item.name).length) {
                setShowData(data.filter(item => searchWord === item.name));
                setErrMsg('');
            } else {
                setErrMsg("Try entering a available and valid country name")
            }
        }
        else{
            setErrMsg("Select country code or name to search for country")
        }
    }

    const onReset=()=>{
        setShowData(data);
        setErrMsg('');
        setSearchWord('');
    }

    useEffect(()=>{
        setShowData(data);
    },[data]);

    return (
        <div>
            <div className="heading">Countries</div>
            <div className="mainbody">
                <div className="panel">
               <div>  
                   <div className="subHeading">Select a filter parameter and search </div>
                        <button className={searchPara === "Country Code" ? "infocus" : null} value="Country Code" onClick={(e) => onClickHandler(e)}>
                            Country Code
                        </button>
                        <button className={searchPara === "Country Name" ? "infocus" : null} value="Country Name" onClick={(e) => onClickHandler(e)}>
                            Country Name
                        </button>
               </div>
                    {errMsg ? <div className="err">{errMsg}</div> : null}
                    <form type="submit" onSubmit={e => onSubmitHandler(e)}><input onChange={e => onChangeHandler(e)} value={searchWord} />
                        <button onClick={e => onSubmitHandler(e)}>Search</button>
                    </form>
                    <button onClick={e => onReset(e)}>Reset</button>

               <hr/>
               <div>
                    <div className="subHeading">Sort list in ascending descending order of population of capital cities of countries.</div>
                   <button  onClick={e=>{sortData(e)}} value="ascending">ascending</button>
                    <button onClick={e => { sortData(e) }} value="descending">descending</button>
               </div>
                </div>
                <div className="cardGrid">
                    {showData ? showData.map((item, index) => {
                        return (
                            <Card item={item} key={index} index={index} onCardClickHandler={onCardClickHandler}
                                focusStyle={(id === index) ? "cardFocus": null}/>
                        )
                    }) : <div>data not available</div>}
                </div>
            </div>
            <div><span className="bottomHeading">Developed By: </span> Aditya Acharya</div>
        </div>

    )
}

export default Panel;