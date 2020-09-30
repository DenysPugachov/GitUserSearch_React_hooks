import React, { Fragment, useContext } from "react";
import { Card } from "../components/Card";
import { GithubContext } from "../context/github/githubContext";
import { Search } from "./../components/Search";

export const Home = () => {
    const { loading, users } = useContext(GithubContext);
    // console.log(useContext(GithubContext));
    return (
        <Fragment>
            <Search />

            <div className="row">
                {
                    loading
                        ? <p className="text-center"> Загрузка...</p>
                        : users.map(user => (
                            <div className="col-sm-4 mb-4" key={ user.id }>
                                <Card user={ user } />
                            </div>
                        ))
                }

            </div>

        </Fragment>
    );
};
