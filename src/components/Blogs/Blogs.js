import React from 'react';
import { Accordion } from 'react-bootstrap';
import './BLogs.css';
const Blogs = () => {
    return (
        <div className='blogs-div'>
            <div className="container">
                <div className="row">
                    <div className="col-12 blogs-heading text-center py-4">
                        <h1>BLOGS</h1>
                    </div>
                </div>

                <div className="acoordion-div">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><strong>Difference Between JavaScript and NodeJs</strong></Accordion.Header>
                            <Accordion.Body>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">JavaScript</th>
                                            <th scope="col">NodeJs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>It is a programming language. We use JS mainly to write scripts on a website that makes web pages more dynamic in nature.</td>
                                            <td>It is a runtime environment for Javascript that lets a user run this programming language on the server-side as well.</td>
                                        </tr>
                                        <tr>
                                            <td>It is utilised on the web page’s client-side.</td>
                                            <td>It lets us use JS on the server-side as well since it works on the server-side.</td>
                                        </tr>
                                        <tr>
                                            <td>The JS can easily add HTML and even play with the DOM.</td>
                                            <td>The Node.JS, on the other hand, isn’t capable enough to add various HTML tags.</td>
                                        </tr>
                                        <tr>
                                            <td>It runs mainly on the client-side. Thus, it is used in the development of the front end.</td>
                                            <td>It runs on the server-side. Thus, it helps in the server-side development via the JS.</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><strong>Differences between SQL and NoSQL databases.</strong></Accordion.Header>
                            <Accordion.Body>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">SQL</th>
                                            <th scope="col">NoSQL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>SQL databases are primarily called as Relational Databases (RDBMS).</td>
                                            <td>NoSQL database are primarily called as non-relational or distributed database. </td>
                                        </tr>
                                        <tr>
                                            <td>SQL databases defines and manipulates data based structured query language (SQL)</td>
                                            <td>A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store.</td>
                                        </tr>
                                        <tr>
                                            <td>In almost all situations SQL databases are vertically scalable. This means that we can increase the load on a single server by increasing things like RAM, CPU or SSD.</td>
                                            <td>NoSQL databases are horizontally scalable. This means that we handle more traffic by sharding, or adding more servers in your NoSQL database.</td>
                                        </tr>
                                        <tr>
                                            <td>SQL databases are table-based </td>
                                            <td>NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. </td>
                                        </tr>
                                        <tr>
                                            <td>SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability)</td>
                                            <td>NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance).</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><strong>What is JWT and how does it work?</strong></Accordion.Header>
                            <Accordion.Body>
                                <strong>JWT:</strong><br />
                                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                                <p>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                                <p>Once decoded, you will get two JSON strings:
                                    <ol>
                                        <li>The header and the payload.</li>
                                        <li> The signature. </li>
                                    </ol>
                                </p>
                                <p>The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.</p>

                                <p>There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.</p>

                                <p> The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Blogs;