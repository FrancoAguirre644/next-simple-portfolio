import Layout from '../components/Layout'
import { skills, experiences, projects } from '../profile'

const index = () => (
    <Layout>
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark text-white h-100">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img-fluid" src="/img-profile.jpg" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h1>My Profile</h1>
                            <p>
                                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame.
                            </p>
                            <a href="#" className="btn btn-outline-light">Hire me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row py-2">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card-body bg-dark text-white h-100">
                            <h1>Skills</h1>
                            {
                                skills.map(({ skill, percentage }, i) => (
                                    <div className="py-3" key={i}>
                                        <h5>{skill}</h5>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: `${percentage}%` }}></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body bg-dark h-100">
                            <h1>Experience</h1>
                            <ul>
                                {
                                    experiences.map(({ title, description, from, to }, i) => (
                                        <li key={i}>
                                            <h3>{title}</h3>
                                            <h5>{from}-{to}</h5>
                                            <p>{description}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row py-2">
            <div className="col-md-12">
                <div className="row bg-dark">
                    <div className="col-md-12">
                        <div className="card-body bg-dark text-white text-center">
                            <h1>Portfolio</h1>
                        </div>
                    </div>
                    {
                        projects.map(({ title, content, image }, i) => (
                            <div className="col-md-4 p-2" key={i}>
                                <div className="card h-100 border-primary">
                                    <div className="overflow">
                                        <img className="card-img-top" src={image} />
                                    </div>
                                    <div className="card-body">
                                        <h3>{title}</h3>
                                        <p>{content}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    </Layout>
)

export default index;