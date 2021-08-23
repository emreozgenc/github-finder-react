import React, {Fragment, useState, useEffect} from 'react'
import Loading from './Loading'
import Repository from './Repository'
import { getUserRepositories } from '../helper'

const Repositories = ({login}) => {

    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('hello');
        setLoading(true)
        getUserRepositories(login)
            .then(data => {
                setRepos(data);
                setLoading(false);
            });
    }, [])

    if(loading) {
        return <Loading />
    } 
    else {
        return (
            <Fragment>
                {repos.map((repo) => <Repository repo={repo} />)}
            </Fragment>
        )
    }

}

export default Repositories
