import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

function AddNewPack(props) {
    const [Name, setName] = useState("");
    const [type, setType] = useState("Channel package");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const submitChannel = (e) => {
        const newChannel ={
           name : Name,
            type:[type],
            price: price,
            image:image,
            categories : type,
            Description : description
        }
        console.log(newChannel)
    }

    return (
        <>
            <Form>
                <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Pack Name"
                            value={Name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>
                </Row>

                <Row className={"mb-3"}>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Type</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={type}
                            onChange={e => setType(e.target.value)}
                        >
                            <option value="Pack">Channel package</option>
                            <option value="Individual"> Individual</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Enter the Price</Form.Label>
                        <Form.Control placeholder="Price"
                                      value={price}
                                      onChange={e => setPrice(e.target.value)}
                        />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Image of Pack</Form.Label>
                        <Form.Control placeholder={"Enter url of image"}
                                      value={image}
                                      onChange={e => setImage(e.target.value)}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Description</Form.Label>
                        <Form.Control placeholder={"Enter Discription of Channel"}
                                      value={description}
                                      onChange={e => setDescription(e.target.value)}
                        />
                    </Form.Group>

                </Row>

                {/*<Row className={"mb-3"}>*/}
                {/*    <Form.Group as={Col} controlId="formGridZip">*/}
                {/*        <Form.Label>Zip</Form.Label>*/}
                {/*        <Form.Control />*/}
                {/*    </Form.Group>*/}
                {/*</Row>*/}

                <Button variant="primary" type="submit" onClick={submitChannel}>
                    ADD CHANNEL
                </Button>
            </Form>
        </>
    );
}

export default AddNewPack;