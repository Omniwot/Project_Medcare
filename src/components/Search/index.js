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

  const usersPerPage = 6;
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
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByName = () => {
    find(searchName, "name")
  };

  

  const displayPrices=restaurants.slice(pagesVisited, pagesVisited + usersPerPage)
   .map((restaurant) => {
    restaurant=EJSON.parse(JSON.stringify(restaurant),{strict:false});
    return (
      <tr>
      <th scope="row"></th>
      <td>{restaurant.Hospital}</td>
      <td>Location</td>
      <td>Contact Number</td>
      <td>{restaurant.ecp}</td>
      <td>{restaurant["Cigna-Deductible"]}</td>
      <td>{restaurant["Cigna-Copay"]}</td>
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
      
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col"></th>
      <th scope="col">Provider</th>
      <th scope="col">Location</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Cash Price</th>
      <th scope="col">Cigna-Deductible</th>
      <th scope="col">Cigna-Copay</th>
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
        previousLinkClassName={"btn btn-info"}
        nextLinkClassName={"btn btn-info"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      </div>
    </div>
  );
};

export default Search;
