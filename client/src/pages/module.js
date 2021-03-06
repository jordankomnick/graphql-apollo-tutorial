import {Layout, ModuleDetail, QueryResult} from "../components";
import {gql, useQuery} from "@apollo/client";

export const GET_MODULE = gql`
    query getModule($moduleId: ID!, $trackId: ID!) {
        module(id: $moduleId) {
            id
            title
            content
            videoUrl
        }
        track(id: $trackId) {
            id
            title
            modules {
                title
                length
                id
            }
        }
    }
`;

const Module = ({moduleId, trackId}) => {
    const {loading, error, data} = useQuery(GET_MODULE, {variables: {moduleId, trackId}});

    return <Layout fullWidth={true}>
        <QueryResult error={error} loading={loading} data={data}>
            <ModuleDetail track={data?.track} module={data?.module} />
        </QueryResult>
    </Layout>
}

export default Module;