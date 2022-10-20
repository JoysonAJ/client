import React from 'react';
import data from "../packData";
import ChannelBundel from "../components/ChannelBundel";

function BasicPlans(props) {
    return (
        <>
            <div className="row">
                {data.map(channel =>{
                    return(
                        <div className="col-md-4 p-3">
                            <div className={"channel-pack-style"}>
                                <ChannelBundel channel={channel}/>
                            </div>

                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default BasicPlans;