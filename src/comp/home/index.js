import React, {Fragment, useEffect, useState, useContext} from 'react';
import './home.css';
import {DataContext} from '../data/store'
import { useHistory } from 'react-router-dom';

const Home = () => {
    const {beerList} = useContext(DataContext);
    const [list, setList] = useState(beerList);
    const history = useHistory();

    useEffect(() => {
        let isMounted = true;
        // console.log(beerList)
        isMounted && setList(beerList);

        return () => {
            isMounted = false
        }
    }, [beerList]);

    const pre2010Filter = (event) => {
        setList(
            event.target.checked ?
                beerList.filter(item => (parseInt(item['first_brewed'].split('/')[1]) < 2010)) :
                beerList
        )
    };

    const goToInfo = (id) => {
        history.push(`info/${id}`);
    };

    return (
        <Fragment>
            <div className={'card-container'}>
                <div className={'switch-container'}>
                    Show brewed before or on 2010:
                    <label className="switch">
                        <input type="checkbox" onChange={pre2010Filter}/>
                        <span className="slider round"/>
                    </label>
                </div>


                {
                    list.map((item, index) => (
                        <div key={index}  onClick={() => goToInfo(item.id)}>
                            <div className="card" >
                                <img src={item['image_url']} alt="Avatar" />
                                <div className="overlay">{item['tagline']}</div>
                                <div className="container">
                                    <h4><b>{item.name}</b></h4>
                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </Fragment>
    );

};

export default Home;
