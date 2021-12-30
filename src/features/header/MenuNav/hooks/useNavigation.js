import {useQuery, gql} from "@apollo/client";

export const GET_NAVIGATION_QUERY = gql`
    query GetNavigation($lang) {
        navigation(lang) {
            id
            name
            url
            categories {
                id
                name
                url
                children {
                    id
                    name
                    url
                }
            }
            brands {
                id
                name
                url
                image
            }
            banner {
                id
                name
                header
                url
                image
            }
        }
    }
`;

export const useNavigation = (
        lang = "ru"
    )

        => {
        const {data} = useQuery(GET_NAVIGATION_QUERY, {
            variables: {
                lang,
            },
        });

        return {
            items: data?.navigation ?? [],
        };
    }
;
