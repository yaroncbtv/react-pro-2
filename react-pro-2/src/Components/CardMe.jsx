import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
class CardMe extends React.Component {

    render() {
        
        if(this.props.tweets){
            return(
                <>
                {
                    this.props.tweets.map(tweet => {
                        return (
                            <>
                                <Card style={{ background: '#343A40', color: 'white' ,marginTop:'20px', marginBottom:'20px'}}>
                                    <Card.Header
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between'


                                        }}>
                                        <div>{tweet.userName}</div>
                                    <div>{tweet.date}</div>
                                    </Card.Header>

                                    <Card.Body>
                                        {tweet.contact}
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }
                
                </>

            )
            
        }
        
        return (
            <>
               


            </>
        );
    }


}

export default CardMe;