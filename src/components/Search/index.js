import React, { useState, useEffect } from "react";
import RestaurantDataService from "./service";
import { Link } from "react-router-dom";

import ReactPaginate from 'react-paginate';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

let EJSON = require('mongodb-extjson');

const Search = props => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchName, setSearchName ] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [CPT, setCPT] = useState('');
  const [Desc, setDesc] = useState('');

  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(restaurants.length / usersPerPage);


  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
  }, []);


  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };


  const find = (query, by) => {
    RestaurantDataService.find(query, by)
        
      .then(response => {
        console.log(response.data);
        setRestaurants(response.data.restaurants);
        setCPT(EJSON.parse(JSON.stringify(response.data.restaurants[0]["CPT"]),{strict:false}));
        setDesc(response.data.restaurants[0]["Description"]);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByName = () => {
    find(searchName, "name")
  };

  const getCPT=(<div>{CPT}</div>);
  const getDesc=(<div>{Desc}</div>);

  const displayPrices=restaurants.slice(pagesVisited, pagesVisited + usersPerPage)
   .map((restaurant) => {
    restaurant=EJSON.parse(JSON.stringify(restaurant),{strict:false});
    return (
      <tr>
      <th scope="row"></th>
      <td>{restaurant.Hospital}</td>
      <td>{restaurant["Location"]}</td>
      <td>{restaurant["contact"]}</td>
      <td>{restaurant["InsurName"]}</td>
      <td>${restaurant["Est service cost"]}</td>
      <td>${restaurant["remaining deductable"]}</td>
      <td>${restaurant["co-pay"]}</td>
      </tr>
      );
      
  });

 
  
  return (
    <div>
      <div className="row pb-1">
        <div className="input-group col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Procedure/CPT"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
       
      </div>
      <div >
      <div className="tablehead">
        <div className="CPT">
          <div className="CPTH"> CPT: </div>
          <div className="CPT-val">{getCPT}</div>
        </div>
        <div className="Desc">
          <div className="DescH"> Description : </div>
          <div className="Desc-val">{getDesc}</div>
        </div>
        <div className="disc">Disclaimer: These are estimated charges and final bill may vary. Please contact the provider for actual costs.   
</div>
      </div>
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col"></th>
      <th scope="col">Provider</th>
      <th scope="col">Location</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Insurance</th>
      <th scope="col">Estimated Cash Price</th>
      <th scope="col">Deductible</th>
      <th scope="col">Copay</th>
    </tr>
  </thead>
  <tbody>
   {displayPrices} 
  </tbody>
</table>

      </div>
      <div className="paginate">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"btn btn-success"}
        nextLinkClassName={"btn btn-success"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      </div>
    </div>
  );
};

export default Search;
