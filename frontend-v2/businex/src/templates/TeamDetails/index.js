import React,{Fragment} from 'react';
import PageWrapper from "../../components/PageWrapper";
import MemberInfo from "./MemberInfo";

import { Row } from 'react-bootstrap';
import farmData from '../../data/Team/home-one'
import SkillsExperience from "./SkillsExperience";
import Education from "./Education";
import PageHeader from "../../components/PageHeader";
import StickyBar from '../../components/StickyBar';

const TeamDetailsPage = () => {
    const memberID = new URLSearchParams(window.location.search).get("id");
    const farm = farmData.find(member=> member.id === parseInt(memberID));
    return (
        <Fragment>
            <PageHeader
                bgImg={require('../../assets/img/page-header.jpg')}
                title={farm.farmName}
                content={farm.userName}
            />

            <PageWrapper classes={'member-details-wrapper sm-top'}>
                <Row>
                    <div className="col-8">
                        <MemberInfo farm={farm}/>
                        <SkillsExperience farm={farm}/>
                        <Education farm={farm}/>
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