import Layout from '../components/Layout'
import Error from '../pages/_error'


const github = ({user, statusCode}) => {
    
    if(statusCode) {
        return <Error/>
    }

    return (
        <Layout>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center border-secondary">
                        <h2>{user.login}</h2>
                        <img src={user.avatar_url} alt="" width="200" className="rounded-circle mx-auto my-2"/>
                        <p>I'm a Freelance FullStack Web Developer and content creator</p>
                            <a className="btn btn-outline-dark mb-3">My Blog</a>
                            <a className="btn btn-outline-secondary">Go to Github</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export async function getServerSideProps() {

    const response = await fetch('https://api.github.com/users/francoaguirre644')
    const data = await response.json();

    const statusCode = response.status > 200 ? response.status : false;
    
    return {
        props: {
            user: data,
            statusCode
        }
    }
}

export default github;