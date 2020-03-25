import React from 'react';
import SectionTitle from "../../UI/SectionTitle";

import teamBg from '../../../assets/img/page-header.jpg'
import teamData from '../../../data/Team/home-two'
import TeamMember from "./member";

const Team = () => {
    return (
        <div className="team-area bg-brand">
            <div className="row no-gutters align-items-center">
                <div className="col-xl-4">
                    <div className="team-area-left text-center text-md-left">
                        <SectionTitle
                            variant="light"
                            title="Meet the Team"
                            heading="We believe <br />trust & passion makes a great team"
                            text="<strong>Commodoro</strong> always is commited with passion and creativity to get things done in order to acomplish their goal which is to connect farmers and suppliers over the world to create a fair descentraized trade by using cutting-edge technology."
                        />
                    </div>
                </div>

                <div className="col-xl-8">
                    <div className="team-area-right team-area-right--2 bg-img" style={{backgroundImage:`url(${teamBg})`}}>
                        <div className="row no-gutters align-items-end mtn-40">
                            {
                                teamData.map(member => (
                                    <TeamMember key={member.id} id={member.id} profilePic={member.profilePic} name={member.name} designation={member.designation} linkedin={member.linkedin} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;