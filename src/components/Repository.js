import React from 'react'

const Repository = ({repo}) => {

    return (
        <div className="col-12 col-md-6 my-2">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">{repo.name}</h5>
                        <p className="card-text">
                            {repo.description !== null ? <span>{repo.description}</span> : <span>No description</span>}
                        </p>
                        <span className="badge bg-danger mx-1">
                            {repo.language}
                        </span>
                        <span className="badge bg-success mx-1">
                            <i className="far fa-star"></i> {repo.stargazers_count}
                        </span>
                        <span className="badge bg-primary mx-1">
                        <i className="fas fa-search"></i> {repo.watchers_count}
                        </span>
                        <span className="badge bg-warning mx-1">
                        <i className="fas fa-code-branch"></i> {repo.forks}
                        </span>
                        <div className="mt-3">
                                <a href={repo.html_url} target="_blank" className="btn btn-outline-success btn-sm">Go to Github address</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Repository;