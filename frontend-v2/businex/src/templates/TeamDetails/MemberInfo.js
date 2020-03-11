import React,{ Component } from 'react';
import axios from 'axios';

class MemberInfo extends Component {
    constructor(props) {
      super(props);

      this.state = {
        farmName: '',
        first_name: '',
        last_name: '',
        bio: '',
        facebook: '',
        twitter: '',
        linkedin: '',
        instagram: '',
        address: '',
        phone: '',
        email: '',
        website: '',
      };
    }

    componentDidMount () {
        axios.all([
            axios.get('http://127.0.0.1:8000/api/v1/farms/1/'),
            axios.get('http://127.0.0.1:8000/api/v1/users/2/')
        ])
        .then(axios.spread((farmRes, userRes) => this.setState({
        bio: farmRes.data.bio,
        first_name: userRes.data.first_name,
        last_name: userRes.data.last_name,
        facebook: userRes.data.facebook,
        twitter: userRes.data.twitter,
        linkedin: userRes.data.linkedin,
        instagram: userRes.data.instagram,
    })))
        .catch(error => error );
    }

    render () {
        const MemberInfo = ({farm}) => {
            const {profilePic,name,userName,bio,socials,address,phone,email,website} = farm;
            return (
                <div className="member-details-top">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="member-pic mb-sm-35">
                                <img src={require('../../assets/img/' + profilePic)} alt={name}/>
                            </div>
                        </div>

                        <div className="col-md-7 ml-auto">
                            <div className="member-desc">
                                <h2>{`${this.state.first_name} ${this.state.last_name}` }</h2>
                                <h5>{this.state.bio}</h5>
                                <p dangerouslySetInnerHTML={{__html: this.state.bio}}/>

                                <div className="member-social-icons mt-25">
                                    <a href={`https://facebook.com/${this.state.facebook}`} target="_blank" rel="noopener noreferrer" className="facebook"><i className="fa fa-facebook"/></a>
                                    <a href={`https://twitter.com/${this.state.twitter}`} target="_blank" rel="noopener noreferrer" className="twitter"><i className="fa fa-twitter"/></a>
                                    <a href={`https://linkedin.com/in/${this.state.linkedin}`} target="_blank" rel="noopener noreferrer" className="linkedin"><i className="fa fa-linkedin"/></a>
                                    <a href={`https://instagram.com/${this.state.instagram}`} target="_blank" rel="noopener noreferrer" className="instagram"><i className="fa fa-instagram"/></a>
                                </div>

                                <div className="contact-info mt-25">
                                    <p><strong>Address</strong> <span dangerouslySetInnerHTML={{__html: address}}/></p>
                                    <p><strong>Phone</strong> {phone}</p>
                                    <p><strong>Email</strong> {email}</p>
                                    <p><strong>Web</strong> {website}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default MemberInfo;