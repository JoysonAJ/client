import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Loading from "../Loading";
import Error from "../Error";
import Success from "../Success";

import ChannelBundel from "../ChannelBundel";
import {getAllChannel} from "../../actions/chBasicAction";
import AdminChannelPack from "./AdminChannelPack";
import axios from "axios";

// async function PackList(props) {
function PackList(props) {

   //  const channelBasic = await axios.get("/api/channel/channelbasic");
    // console.log(channelBasic);

    const dispatch = useDispatch();
    const channelBasicState = useSelector(state => state.getAllChannelReducers);
    const {channelBasic, error, loading} = channelBasicState


    useEffect(() => {
        //parameter from the file actions/chBasicsAction
        dispatch(getAllChannel());
    }, []);

    console.log(channelBasic)

    return (
        <>
            <div className="row ">

                {loading ? (<Loading/>) : error ? (<Error error='Something went Wrong'/>
                ) : (
                    //Channel contains data from the data base

                    channelBasic.map(channel => {
                        return (
                            <div className="col-md-4 p-10" key={channel._id}>
                                <div className={"channel-pack-style m-5 "}>
                                    <ChannelBundel channel={channel}/>
                                </div>

                            </div>
                        );
                    })
                )
                }
            </div>
        </>
    );
}

export default PackList;
