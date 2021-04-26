import React from 'react';
import {Container, Row, InputGroup, FormControl, Button} from "react-bootstrap";


export default function ContactBlock(){

return(
    <section className={'contactSection'}>
        <Container>
            <Row>
                <div className={'contactBlock'}>
                    <h2 className={'contactBlockTitle'}>There are many reasons to get down</h2>
                    <p className={'contactBlockDesc w-50 mx-auto'}>
                        There are many reasons to get down and start to get depressed about your situation.
                    </p>
                    <div className={'contactBlockForm'}>
                        <InputGroup className="mb-3 justify-content-center">
                            <FormControl
                                placeholder="Your Email"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary" className={'contactBlockSubmit'}>Send</Button>
                            </InputGroup.Append>
                        </InputGroup>

                        <p className={'contactBlockFormAlert'}>No spam. Only releases, updates and discounts</p>
                    </div>
                </div>

            </Row>
        </Container>
    </section>
)
}