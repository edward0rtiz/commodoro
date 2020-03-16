import React,{Fragment, Component} from 'react';
import PageWrapper from "../../components/PageWrapper";
import MemberInfo from "./MemberInfo";

import { Row } from 'react-bootstrap';
import farmData from '../../data/Team/home-one';
import coffeData from '../../data/Team/features'
import ProductFeatures from "./ProductFeatures";
import History from "./History";
import PageHeader from "../../components/PageHeader";
import StickyBar from '../../components/StickyBar';
import axios from 'axios';


const farmEndPoint = '/api/v1/farms/'
const userEndPoint = '/api/v1/users/2/'

class TeamDetailsPage extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
  
        this.state = {
          farmObj: {},
          usrObj: {},
          coffeePrice: '',
        };
        this.fetchAPIData = this.fetchAPIData.bind(this);
    }

    fetchAPIData() {
        const farmID = new URLSearchParams(window.location.search).get("id");
        axios.all([
            axios.get(farmEndPoint + farmID + '/'),
            axios.get(userEndPoint)
        ]).then(axios.spread((farmRes, userRes) => {
            this._isMounted && this.setState({
                farmObj: farmRes.data,
                usrObj: userRes.data,
                coffeePrice: farmRes.data.farm_product[0].price,
            })
        })).catch(error => error);
    }

    componentDidMount () {
        this._isMounted = true;
        this.fetchAPIData();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render () {
        console.log(this.state.farmObj);
        const memberID = new URLSearchParams(window.location.search).get("id");
        const farmUnit = farmData.find(member=> member.id === parseInt(memberID));
        const priceVal = this.state.coffeePrice;
        const userName = this.state.usrObj.first_name + ' ' + this.state.usrObj.last_name
        return (
            <Fragment>
                <PageHeader
                    bgImg={require('../../assets/img/farms/headers/page-header.jpg')}
                    title={this.state.farmObj.farmName}
                    content={userName}
                />

                <PageWrapper classes={'member-details-wrapper sm-top'}>
                    <Row>
                        <div className="col-8">
                            <MemberInfo farmData={this.state.farmObj} userName={userName}/>
                            <ProductFeatures farmUnit={farmUnit} coffeData={coffeData}/>
                            <History farmUnit={farmUnit}/>
                        </div>
                        <div className="col-4">
                            <StickyBar price={priceVal}/> 
                        </div>
                    </Row>
                </PageWrapper>
            </Fragment>
        );
    }
};

export default TeamDetailsPage;