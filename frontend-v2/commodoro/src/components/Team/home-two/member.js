import React from 'react';
// import {Link} from "react-router-dom";

const TeamMember = ({id,linkedin, profilePic,name,designation}) => {
    // const teamMemberURl = `/team-member/${name.split(' ').join('-').toLocaleLowerCase()}?id=${id}`;
    return (
        <div className="col-6 col-md-4">
            <div className="team-mem-item team-mem-item--2">
                <figure className="member-pic">
                    {/* <Link to={`${process.env.PUBLIC_URL + teamMemberURl}`}> */}
                    <a href={"https://www.linkedin.com/" + linkedin}>
                        <img src={require('../../../assets/img/' + profilePic)} alt={name}/>
                    </a>
                </figure>
                <div className="member-info">
                    {/* <h5><Link to={`${process.env.PUBLIC_URL + teamMemberURl}`}>{name}</Link></h5> */}
                    <h5><a href={"https://www.linkedin.com/" + linkedin}>{name}></a></h5>
                    <span className="designation">{designation}</span>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;