import React from "react";
import { Form, Row } from "react-bootstrap";
import {BiBookmarkPlus} from "react-icons/bi";
import "./suplements.scss"
const Suplements =()=>{
    const handleClick=()=>{

    }
    return(
        <div className="content">
            <div className="align-items-center container-fluid  suplements justify-content-center mt-5 mx-5">
                <Row>
                    <div className="col-4 mt-3">
                        <Row className="justify-content-center text-center">
                            <button className="col lapelButton lapel">Search</button>
                            <button className="col lapelButton">Library</button>
                            <button className="col lapelButton">Index</button>
                        </Row>
                        <Form>
                            <input type="search" className="form-control" />
                            <Row>
                                <div className="col-1">
                                    <input type="checkbox"/>
                                </div>
                                <div className="col px-0">
                                    <label htmlFor="">Articles</label>
                                </div>
                                <div className="col-1">
                                    <input type="checkbox"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Package</label>
                                </div>
                                <div className="col-1">
                                    <input type="checkbox"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Rules</label>
                                </div>
                            </Row>
                        </Form>
                    </div>
                    <div className="col mt-5 detail">
                        <Row className="float-end mx-5">
                            <div className="col">
                                <button className="col borderButton mx-2">PDF</button>
                            </div>
                            <div className="col">
                                <input type="date" name="date" id="date"/>
                            </div>
                        </Row>
                        <Row>

                        </Row>
                    </div>
                </Row>
                <Row className="mt-5">
                    <div className="col-4">
                        <Row className="align-items-center">
                            <div className="col-10">
                                <a href="#" className="rulesH">Prueba</a>
                            </div>
                            <div className="col">
                                <BiBookmarkPlus className="bookMark"/>
                            </div>
                        </Row>
                        <Row>
                            <p className="suplementsDetail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa.</p>
                        </Row>
                    </div>
                    <div className="col px-5 detail">
                        <Row className="align-items-center mx-5">
                            <div className="col-11">
                                <a href="#" className="rulesH">Prueba</a>
                            </div>
                            <div className="col">
                                <BiBookmarkPlus className="bookMark"/>
                            </div>
                        </Row>
                        <hr className="mx-5 hr"/>
                        <p className="float-end mx-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est lorem ipsum dolor sit. Enim tortor at auctor urna. Eu scelerisque felis imperdiet proin fermentum. Non tellus orci ac auctor augue mauris augue neque gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel quam elementum pulvinar etiam. Luctus accumsan tortor posuere ac ut consequat semper. Blandit volutpat maecenas volutpat blandit aliquam etiam. Id aliquet lectus proin nibh nisl condimentum id. Eu facilisis sed odio morbi quis commodo odio aenean. Urna id volutpat lacus laoreet non curabitur gravida. Feugiat pretium nibh ipsum consequat. Mi quis hendrerit dolor magna eget est lorem. Est ultricies integer quis auctor elit sed vulputate. Nisl purus in mollis nunc sed id. In tellus integer feugiat scelerisque varius morbi enim nunc.Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Pulvinar proin gravida hendrerit lectus a. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Sed turpis tincidunt id aliquet. Vel quam elementum pulvinar etiam non quam. Massa sed elementum tempus egestas sed sed risus pretium. Sit amet mattis vulputate enim nulla. Eget mi proin sed libero enim sed faucibus turpis. Amet venenatis urna cursus eget nunc scelerisque viverra. Accumsan tortor posuere ac ut consequat. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Tristique senectus et netus et. Nec dui nunc mattis enim ut tellus elementum sagittis. Massa tincidunt dui ut ornare lectus sit amet. Sed blandit libero volutpat sed. Volutpat est velit egestas dui. Vel risus commodo viverra maecenas accumsan. Quam quisque id diam vel quam elementum pulvinar etiam non.</p>
                    </div>
                </Row>
            </div>
        </div>
    )
}

export default Suplements;