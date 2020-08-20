import React, { useEffect, useState } from "react";
import apiAxios from "../../httpClient/borrowApiInstance";
// reactstrap components
import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "../../Common/Headers/Header.js";
import Category from "./Category/Category";

function Categories(props) {
  const [categories, SetCategories] = useState(() => []);

  useEffect(() => {
    apiAxios.get("categories").then(
      ({ data }) => {
        console.log(data);
        SetCategories(data);
      },
      (errors) => console.error(errors)
    );
  }, []);

  const categoryMarkup = categories.map((category) => {
    return <Category key={category.id} category={category} />;
  });
  const categoryTable = (
    <Container className="mt--7" fluid>
      {/* Table */}
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">All Categories </h3>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Budget</th>
                  <th scope="col">Status</th>
                  <th scope="col">Users</th>
                  <th scope="col">Completion</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {categories.length > 1 ? categoryMarkup : "No Data Available"}
              </tbody>
            </Table>
            <CardFooter className="py-4">
              <nav aria-label="...">
                <Pagination
                  className="pagination justify-content-end mb-0"
                  listClassName="justify-content-end mb-0"
                >
                  <PaginationItem className="disabled">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      tabIndex="-1"
                    >
                      <i className="fas fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="active">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      2 <span className="sr-only">(current)</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fas fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </CardFooter>
          </Card>
        </div>
      </Row>
    </Container>
  );
  return (
    <>
      <Header />
      {/* Page content */}
      {categories.length > 1 ? categoryTable : <h2>No Categories available</h2>}
    </>
  );
}

export default Categories;
