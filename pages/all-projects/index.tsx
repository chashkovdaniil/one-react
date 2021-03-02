import Section from "../../components/common/Section";
import ListProjects from "../../components/project/List";

function AllProjects(props: any) {
    
    const projects = [
        {
            name: 'Winter in Russia',
            link: 'winter-in-russia',
            image: ''
        },
        {
            name: 'Ivan Grozny',
            link: 'ivan-grozny',
            image: ''
        },
        {
            name: 'Goverment is now',
            link: 'goverment-is-now',
            image: ''
        },
        {
            name: 'Wow',
            link: 'goverment-is-now',
            image: ''
        },
        {
            name: 'Wow',
            link: 'goverment-is-now',
            image: ''
        },
    ];

    return (
        <Section title="All projects">
            <ListProjects projects={projects}/>
        </Section>
    );
}
export default AllProjects;