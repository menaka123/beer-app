import React, {Fragment, useContext, useEffect, useState} from 'react';
import './info.css';
import {DataContext} from "../data/store";

const Info = (props) => {
    const {beerList} = useContext(DataContext);
    const [item, setItem] = useState(null);

    useEffect(() => {
        let isMounted = true;

        isMounted && setItem(beerList.filter(obj => (obj.id.toString() === props.match.params.id))[0]);
        return () => {
            isMounted = false
        }
    }, [beerList,  props.match.params.id]);

    return (
        <Fragment>
            {
                item &&
                <div className="wrapper">
                    <div className="left">
                        <img src={item['image_url']} alt="item"/>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>{item['name']}</h3>
                            <div className="info_data">
                                <div className="data">
                                    <h4>PH :</h4>
                                    <p>{item['ph']}</p>
                                </div>
                                <div className="data">
                                    <h4>Food pairing :</h4>
                                    <p>{item['food_pairing'].join(', ')}</p>
                                </div>
                            </div>
                            <div className="info_data">
                                <div className="data">
                                    <h4>Brewers tips :</h4>
                                    <p>{item['brewers_tips']}</p>
                                </div>
                            </div>
                        </div>

                        <div className="projects">
                            <h4>Method</h4>
                            <div>
                                {
                                    item['method']['fermentation'] &&
                                    <h5>
                                        Fermentation: {item['method']['fermentation']['temp']['value']} {item['method']['fermentation']['temp']['unit']}
                                    </h5>
                                }

                                {
                                    item['method']['mash_temp'] &&
                                    <h5>
                                        Mash temp: {item['method']['mash_temp'][0]['temp']['value']} {item['method']['mash_temp'][0]['temp']['unit']} for {item['method']['mash_temp'][0]['duration']}
                                    </h5>
                                }

                                {
                                    item['method']['twist'] &&
                                    <h5>
                                        Twist: {item['method']['twist']}
                                    </h5>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    );

};

export default Info;
