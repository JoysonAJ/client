import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Loading from "../Loading";
import Error from "../Error";
import Success from "../Success";
import {FaEdit} from "react-icons/fa"
import ChannelBundel from "../ChannelBundel";
import {getAllChannel} from "../../actions/chBasicAction";
import AdminChannelPack from "./AdminChannelPack";
import axios from "axios";
import {Table} from "react-bootstrap";
import {TiDelete} from "react-icons/ti";

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


    let i=0;
    return (
        <>
            <div className="row ">

                {loading ? (<Loading/>) : error ? (<Error error='Something went Wrong'/>
                ) : (
                    //Channel contains data from the data base

                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Plan Name</th>
                            <th>Plan Type</th>
                            <th>Prices</th>
                            <th> Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {

                            channelBasic  && channelBasic.map(channel => {
                                console.log(channelBasic)
                            return(
                                <tr>
                                    <td>
                                        {++i}
                                    </td>

                                    <td>
                                        {channel.name}
                                    </td>

                                    <td>
                                        {channel.categories}
                                    </td>

                                    <td>
                                        {}
                                        {channel.price[0]["Basic"]}
                                    </td>

                                    <td className={'icon-channel'}>
                                       <div className={"p-2 w-100 "}>
                                           <FaEdit className={" text-primary icon-channel w-50 "}/>
                                           <TiDelete className={"text-danger  w-50 "}/>
                                       </div>
                                    </td>


                                </tr>
                            )
                            })
                        }
                        </tbody>
                    </Table>
                )
                }
            </div>
        </>
    );
}

export default PackList;
