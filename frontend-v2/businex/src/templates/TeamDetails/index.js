import React,{ Fragment, Component } from 'react';
import PageWrapper from "../../components/PageWrapper";
import MemberInfo from "./MemberInfo";

import { Row } from 'react-bootstrap';
import farmData from '../../data/Team/home-one';
import coffeData from '../../data/Team/features'
import SkillsExperience from "./SkillsExperience";
import Education from "./Education";
import PageHeader from "../../components/PageHeader";
import StickyBar from '../../components/StickyBar';
import axios from 'axios';


class TeamDetailsPage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        coffeePrice: '',
        farmName: '',
        first_name: '',
        last_name: '',
      };
    }

    componentDidMount () {
        axios.all([
            axios.get('http://127.0.0.1:8000/api/v1/farms/1/'),
            axios.get('http://127.0.0.1:8000/api/v1/users/2/')
        ])
        .then(axios.spread((farmRes, userRes) => this.setState({
        coffeePrice: farmRes.data.farm_product[0].price,
        farmName: farmRes.data.farmName,
        first_name: userRes.data.first_name,
        last_name: userRes.data.last_name,
    })))
        .catch(error => error );
    }
    
    render () {
    const memberID = new URLSearchParams(window.location.search).get("id");
    const farm = farmData.find(member=> member.id === parseInt(memberID));
        return (
            <Fragment>
                <PageHeader
                    bgImg={require('../../assets/img/page-header.jpg')}
                    title={this.state.farmName}
                    content={ `${this.state.first_name} ${this.state.last_name}` }
                />

                <PageWrapper classes={'member-details-wrapper sm-top'}>
                    <Row>
                        <div className="col-8">
                            <MemberInfo farm={farm}/>
                            <SkillsExperience farm={farm} coffeData={coffeData}/>
                            <Education farm={farm}/>
                        </div>
                        <div className="col-4">
                            <StickyBar price={this.state.coffeePrice}/>
                        </div>
                    </Row>
                </PageWrapper>
            </Fragment>
        )
    }
}

export default TeamDetailsPage;