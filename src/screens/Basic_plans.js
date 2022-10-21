import React, {useEffect} from 'react';
// import getAllChannelReducers from "../reducers/chBasicReducers";
import ChannelBundel from "../components/ChannelBundel";
import {useDispatch, useSelector} from "react-redux";
import {getAllChannel} from "../actions/chBasicAction";
import data from "../packData";


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
            <div className="row">

                {loading ? (<h1>Loading</h1>) : error ? (<h1>Something went wrong
                        {
                            console.log(`${loading} \n ${error} \n ${channelBasic}`)
                        }
                </h1>)
                    : (
                        //Channel contains data from the data base
                        channelBasic.map(channel => {
                            return (
                                <div className="col-md-4 p-3">
                                    <div className={"channel-pack-style"}>
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