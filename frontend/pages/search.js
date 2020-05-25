import { withRouter } from "next/router";
import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import { listSearch } from "../api/blog";

const Search = ({ router }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    listSearch({ search: router.query.searchQuery }).then((data) => {
      setResults(data);
    });
  }, [router.query.searchQuery]);

  return (
    <>
      <Layout>
        <main>
          <div className="container-fluid">
            <header>
              <div className="col-md-12 pt-3">
                <h1 className="font-weight-bold text-center">Search</h1>
              </div>
              
              <section>
                <div className="pb-5 text-center">
                  <p>show search results here</p>
                  {JSON.stringify(results)}
                </div>
              </section>
            </header>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default withRouter(Search);
