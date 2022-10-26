import React, {useEffect} from 'react';
// import getAllChannelReducers from "../reducers/chBasicReducers";
import ChannelBundel from "../components/ChannelBundel";
import {useDispatch, useSelector} from "react-redux";
import {getAllChannel} from "../actions/chBasicAction";
import data from "../packData";
import Loading from "../components/Loading";
import Error from "../components/Error";


function BasicPlans(props) {

    const dispatch = useDispatch();

    const channelBasicState = useSelector(state => state.getAllChannelReducers);
    const {channelBasic, error, loading} = channelBasicState


    useEffect(() => {
        //parameter from the file actions/chBasicsAction
        dispatch(getAllChannel());
    }, []);


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

                {/*{data.map(channel => {*/}
                {/*    return (*/}
                {/*        <div className="col-md-4 p-3">*/}
                {/*            <div className={"channel-pack-style"}>*/}
                {/*                <ChannelBundel channel={channel}/>*/}
                {/*            </div>*/}

                {/*        </div>*/}
                {/*    );*/}
                {/*})*/}
            </div>
        </>
    );
}

export default BasicPlans;