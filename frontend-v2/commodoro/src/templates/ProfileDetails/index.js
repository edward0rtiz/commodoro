import React,{Fragment, Component} from 'react';
import PageWrapper from "../../components/PageWrapper";
import MemberInfo from "./MemberInfo";
import { Row } from 'react-bootstrap';
import coffeData from '../../data/Team/features'
import ProductFeatures from "./ProductFeatures";
import History from "./History";
import PageHeader from "../../components/PageHeader";
import StickyBar from '../../components/StickyBar';
import axios from 'axios';

// endpoint to fetch from API
const farmEndPoint = '/api/v1/farms/'
const userEndPoint = '/api/v1/users/'

class TeamDetailsPage extends Component {
    
    // this variable is created to handle async functios and avoid error
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

    // Function that fetch farm data from API
    fetchAPIData() {
        // get the asked id
        const farmID = new URLSearchParams(window.location.search).get("id");
        axios.get(farmEndPoint + farmID + '/')
        .then((farmRes) => {
            this._isMounted && this.setState({
                farmObj: farmRes.data,
                coffeePrice: farmRes.data.farm_product[0].price,
            });
            return axios.get(userEndPoint + farmRes.data.user + '/');
        })
        // get current user data
        .then((userRes) => {
            this._isMounted && this.setState({usrObj: userRes.data});
        }).catch(error => error);
    }

    componentDidMount () {
        this._isMounted = true;
        this.fetchAPIData();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render () {
        // price and user name information
        const priceVal = this.state.coffeePrice;
        const userName = this.state.usrObj.first_name + ' ' + this.state.usrObj.last_name

        return (
            <Fragment>
                {/* header contain image, farm and user information */}
                <PageHeader
                    bgImg={require('../../assets/img/farms/headers/page-header.jpg')}
                    title={this.state.farmObj.farmName}
                    content={userName}
                />

                <PageWrapper classes={'member-details-wrapper sm-top'}>
                    <Row>
                        <div className="col-8">

                            {/* this component show the main info about the farm and user */}
                            <MemberInfo farmData={this.state.farmObj} userName={userName}/>

                            {/* component that show coffee features and characteristics */}
                            <ProductFeatures farmData={this.state.farmObj} coffeData={coffeData} _isMounted={this._isMounted}/>

                            {/* show the farm history timeline */}
                            <History farmData={this.state.farmObj} _isMounted={this._isMounted}/>
                        </div>
                        <div className="col-4">
                            {/* floating component show price info and allow purchase */}
                            <StickyBar price={priceVal}/> 
                        </div>
                    </Row>
                </PageWrapper>
            </Fragment>
        );
    }
};

export default TeamDetailsPage;
