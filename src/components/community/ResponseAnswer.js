import React from 'react';
import {Button, Card} from "react-bootstrap";

function ResponseAnswer({answer}) {
    console.log(answer)
    return (
        <>
            {answer &&
                answer.map(answer =>{
                    return(
                        <div className={"mx-5 p-2"}>
                            <Card border="primary" className={"card text-dark bg-light mb-3"}>
                                <Card.Header className={`text-dark`}>{answer.name}</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            {`${answer.responseQuestion} `}
                                        </p>

                                    </blockquote>
                                </Card.Body>

                                {/*<Card.Footer className="text-muted bg-transparent">*/}
                                {/*    <div className={"text-end"}>*/}

                                {/*        <Button variant="danger"*/}
                                {/*                className={"m-2"}*/}
                                {/*                onClick={resopundeCanel}*/}
                                {/*        >Cancel</Button>*/}

                                {/*        <Button variant="primary"*/}
                                {/*                className={"ml-auto"}*/}
                                {/*                onClick={resopundeHandel}*/}
                                {/*        >Answer</Button>*/}
                                {/*    </div>*/}
                                {/*</Card.Footer>*/}
                            </Card>
                        </div>
                    )
                })

            }

        </>
    );
}

export default ResponseAnswer;