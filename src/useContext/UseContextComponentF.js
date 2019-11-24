import React from 'react'
import {UserContext, ChannelContext} from '../App'

function UseContextComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {user=>{
                    return(
                        <ChannelContext>
                            {
                                channel =>{
                                    return <div> User context value : {user} <br/> Channel context value: {channel}</div>
                                }
                            }
                        </ChannelContext>
                    )
                     
                }}
            </UserContext.Consumer>
        </div>
    )
}

export default UseContextComponentF
