import React,{Fragment} from 'react';
import PageWrapper from "../../components/PageWrapper";
import MemberInfo from "./MemberInfo";

import { Row } from 'react-bootstrap';
import teamData from '../../data/Team/home-one';
import coffeData from '../../data/Team/features'
import SkillsExperience from "./SkillsExperience";
import Education from "./Education";
import PageHeader from "../../components/PageHeader";
import StickyBar from '../../components/StickyBar';

const TeamDetailsPage = () => {
    const memberID = new URLSearchParams(window.location.search).get("id");
    const teamMember = teamData.find(member=> member.id === parseInt(memberID));
    return (
        <Fragment>
            <PageHeader
                bgImg={require('../../assets/img/page-header.jpg')}
                title={teamMember.name}
                content={teamMember.designation}
            />

            <PageWrapper classes={'member-details-wrapper sm-top'}>
                <Row>
                    <div className="col-8">
                        <MemberInfo teamMember={teamMember}/>
                        <SkillsExperience teamMember={teamMember} coffeData={coffeData}/>
                        <Education teamMember={teamMember}/>
                    </div>
                    <div className="col-4">
                        <StickyBar /> 
                    </div>
                </Row>
            </PageWrapper>
        </Fragment>
    );
};

export default TeamDetailsPage;