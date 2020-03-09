import React,{Component} from 'react';
import {InputGroup, FormControl} from 'react-bootstrap' ;

class SearchBar extends Component{
  render () {
    return(
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text className="btn-search"> <i className="fa fa-search"/> </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Search farms"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
    );
  }
}

export default SearchBar;