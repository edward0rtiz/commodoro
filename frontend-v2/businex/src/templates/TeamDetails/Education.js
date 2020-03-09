import React from 'react';
import TimelineWrap from "../../components/Timeline";
import Timeline from "../../components/Timeline/TimelineItem";
import SectionTitle from "../../components/UI/SectionTitle";

const Education = ({teamMember}) => {
    const {education} = teamMember;
    return (
        <div className="member-details-bottom sm-top-wt">
            <div className="row mtn-50">
                <div className="col-xl-6 m-auto text-center">
                    <div className="member-education mem-achieve-item">
                        <SectionTitle
                            heading={'History'}
                            text="In 1994 Carlos Diaz decided to go back agin to its roots and dedicate his life into farming."
                        />
                    </div>
                </div>

                <div className="col-12">
                    <div className="education-content-wrap mt-60">
                        <TimelineWrap icon={'coffee'}>
                            {
                                education.map(educationItem=>(
                                    <Timeline
                                        key={educationItem.no}
                                        degree={educationItem.degree}
                                        institute={educationItem.institute}
                                        duration={educationItem.duration}
                                        comment={educationItem.comment}
                                    />
                                ))
                            }
                        </TimelineWrap>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;